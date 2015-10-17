> # minify-html
>
> **Exhibit.js builder plugin**
>
> Minifies HTML files using [minimize](https://github.com/Swaagie/minimize).
>
> ```sh
> $ npm install -D exhibit-builder-minify-html
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('minify-html', options)
```


## Options

All the [minimize options](https://github.com/Swaagie/minimize#options) work as normal.

#### Additional options

> **`include`** (string/array/function) — default: `'**/*.html'`

Chooses which files this plugin should process. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).


---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-minify-html
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-minify-html.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-minify-html
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-minify-html.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-minify-html
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-minify-html.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-minify-html#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-minify-html.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-minify-html#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-minify-html.svg?style=flat-square&label=peerDeps
