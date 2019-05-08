# jest-example

参考文档 https://vue-test-utils.vuejs.org/zh/

## 1. TODO
- [x] Setup Jest Environment
	* https://jestjs.io/docs/en/getting-started
- [x] Use ES6 syntax
	* https://github.com/babel/karma-babel-preprocessor
- [x] Config Test Environment
	* https://jestjs.io/docs/en/cli#env-environment
    * https://jestjs.io/docs/en/configuration#testenvironment-string
- [x] Integrate Vue
	* https://vue-test-utils.vuejs.org/guides/#testing-single-file-components-with-jest
	* Sample: https://vue-test-utils.vuejs.org/guides/getting-started.html

## Trouble Shooting

### vue-jest@3.0.4 requires a peer of babel-core@^6.25.0 || ^7.0.0-0 but none is installed. You must install peer dependencies yourself.
* https://github.com/babel/babel-bridge#solution


## 2. Testing
- [x] Synchronous Test
	* src/1.synchronous/games.js
- [x] Asynchronous Test
	* src/2.asynchronous/callbacks.js
	* src/2.asynchronous/promises.js
- [x] Snapshot Test
	* src/2.asynchronous/promises.js
