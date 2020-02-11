# blanc-typescript

> A node module boilerplate for typescript using mocha and nyc

[![NPM version](https://badge.fury.io/js/blanc-typescript.svg)](https://www.npmjs.com/package/blanc-typescript/)
[![Build Status](https://secure.travis-ci.org/commenthol/blanc-typescript.svg?branch=master)](https://travis-ci.org/commenthol/blanc-typescript)

This is a boilerplate for a node module using:

* [typescript][],
* [eslint][] using [standard][] syntax for code linting,
* [mocha][] tests,
* [nyc][] for code coverage,
* [jsdoc][] for documentation,
* [rollup][] for bundling (Not yet working)

The files contain examples to show the usage of the different tools in your code.


## Table of Contents

<!-- !toc (minlevel=2 omit="Table of Contents") -->

* [Description](#description)
  * [Example ...](#example-)
* [Contribution and License Agreement](#contribution-and-license-agreement)
* [License](#license)
* [References](#references)

<!-- toc! -->

## Description

Run the different tools from `npm`

* `npm run all`      - Run all stuff
* `npm test`         - Run tests
* `npm run coverage` - Run nyc code coverage
* `npm run lint`     - Linting the source
* `npm run doc`      - Generate documentation from source (open `doc/index.html` after run)


### Example ...


## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your
code to be distributed under the MIT license. You are also implicitly
verifying that all code is your original work or correctly attributed
with the source of its origin and licence.

## License

Copyright (c) commenthol (MIT License)

See [LICENSE][] for more info.

## References

<!-- !ref -->

* [eslint][eslint]
* [eslint-config-standard][eslint-config-standard]
* [jsdox][jsdox]
* [LICENSE][LICENSE]
* [mocha][mocha]
* [nyc][nyc]
* [standard][standard]
* [tsconfig][tsconfig]
* [typescript][typescript]

<!-- ref! -->

[LICENSE]: ./LICENSE
[mocha]: http://mochajs.org/
[eslint]: http://eslint.org
[eslint-config-standard]: https://github.com/feross/eslint-config-standard
[standard]: http://standardjs.com
[jsdox]: http://jsdox.org/
[nyc]: https://istanbul.js.org/
[typescript]: https://www.typescriptlang.org/
[tsconfig]: https://www.typescriptlang.org/v2/en/tsconfig
