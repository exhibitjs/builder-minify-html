import Minimize from 'minimize';

const defaults = {
  include: '**/*.html',
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  // remove plugin-only options
  const include = options.include;
  delete options.include;

  return function *exhibitMinifyHtml({matches, file, contents, util}) {
    // skip irrelevant files
    if (!matches(include)) return contents;

    // make the promisified minify function
    const minimize = util.Promise.promisifyAll(new Minimize(options));

    let minified;
    try {
      minified = yield minimize.parseAsync(contents.toString());
    }
    catch (error) {
      throw new util.SourceError({
        message: error.message,
        file,
        contents,
      });
    }

    return minified;
  };
}
