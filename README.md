# clns - "_(class names)_"

> An unbearably easy-to-use JavaScript tool designed for combining classNames based on certain conditions.

#### Install it from the [npm registry](https://www.npmjs.com/):
```bash
npm install clns
```

#### Usage

```js
import clns from 'clns';

const names = clns('foo', 'bar', 'baz');

console.log(names); // 'foo bar baz'
```

```js
import clns from 'clns';

const conditionalNames = clns({
  'foo': true,
  'bar': false,
  'baz': true,
});

console.log(conditionalNames); // 'foo baz'
```