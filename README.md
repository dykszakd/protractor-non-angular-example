protractor-non-angular-example
==============================

## windows version

type npm install

### start selenium grid

download selenium and drivers:
```
node_modules\.bin\webdriver-manager.cmd update
```

start selenium :

```
node_modules\.bin\webdriver-manager.cmd start
```



### angular version :

set in conf.js in 13 line

```js
specs: ['angular.js'],
```

and run protractor conf.js

### non-angular version :

set in conf.js in 13 line

```js
specs: ['non-angular.js'],
```
and run protractor conf.js
