# clns - "class names"

> An unbearably easy-to-use TypeScript-optimized tool designed for combining classNames based on certain conditions or whatnot.

#### Why clns:
- **TypeScript-First**: Built with TypeScript users in mind for enhanced type safety and developer experience.
- **Minimalist Design**: The ultimate in simplicity, offering just what you need and nothing more.

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

Leverage the simplicity and power of CLNS to manage your classNames in a more readable and maintainable way.
