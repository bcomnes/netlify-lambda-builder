# netlify-lambda-builder  [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![coverage][12]][13]
[![downloads][8]][9] [![js-standard-style][10]][11]

An experimental CLI and convention for building Netlify functions.

## Installation

```console
$ yarn add jsonfeed-to-rss --dev
```

## Usage

```console
$ tree src-folder/

src-folder/
├── function-a
│   ├── index.js
│   └── package.json
└── function-b
    ├── index.js
    └── package.json


$ netlify-lambda-builder src-folder --dest functions

# ... some time

$ tree src-folder/

src-folder/
├── function-a
│   ├── index.js
│   ├── package.json
│   └── node_modules
│        └── ...
└── function-b
    ├── index.js
    └── package.json
    └── node_modules
        └── ...

$ tree function/

functions/
├── function-a.zip
└── function-b.zip
```

Running `netlify-functions-builder` will run `npm i` inside each function folder it discovers in the source dir.  A function folder is a top level folder in the source folder that contains a package.json.


## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/netlify-lambda-builder.svg?style=flat-square
[3]: https://npmjs.org/package/netlify-lambda-builder
[4]: https://img.shields.io/travis/bcomnes/netlify-lambda-builder/master.svg?style=flat-square
[5]: https://travis-ci.org/bcomnes/netlify-lambda-builder
[8]: http://img.shields.io/npm/dm/netlify-lambda-builder.svg?style=flat-square
[9]: https://npmjs.org/package/netlify-lambda-builder
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://img.shields.io/coveralls/bcomnes/netlify-lambda-builder/master.svg?style=flat-square
[13]: https://coveralls.io/github/bcomnes/netlify-lambda-builder
