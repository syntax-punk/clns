# clssnms

> Unbearably easy-to-use JavaScript tool designed for combining classNames based on certain conditions.

#### Install it from the [npm registry](https://www.npmjs.com/):
```bash
npm install clssnms
```

#### Usage

```js
import clssnms from 'clssnms';

const names = clssnms('foo', 'bar', 'baz');

console.log(names); // 'foo bar baz'
```

```js

const conditionalNames = clssnms({
  'foo': true,
  'bar': false,
  'baz': true,
});

console.log(conditionalNames); // 'foo baz'
```