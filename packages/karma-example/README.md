# demo-karma

## TODO
- [x] Setup karma + jasmine test env
- [x] Testing ES6 via karma-babel-preprocessor
- [x] Issue: can't support 'import/export'

## Steps
1. Setup karma + jasmine test env
	* Install: https://karma-runner.github.io/3.0/intro/installation.html 
	* Configuration: https://karma-runner.github.io/3.0/intro/configuration.html
2. Testing ES6 via karma-babel-preprocessor
	* Configuration: https://github.com/babel/karma-babel-preprocessor
3. Issue: can't support 'import/export'
	* https://github.com/babel/karma-babel-preprocessor/issues/17#issuecomment-136066231
	* use webpack + babel-loader to solve this
