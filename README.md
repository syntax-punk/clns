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

##### Basic classNames concatenation
```js
import clns from 'clns';

const names = clns('foo', 'bar', 'baz');

console.log(names); // 'foo bar baz'
```
#

##### Conditional classNames concatenation with an object
```js
import clns from 'clns';

const conditionalNames = clns({
  'foo': true,
  'bar': false,
  'baz': true,
});

console.log(conditionalNames); // 'foo baz'
```
#

##### Conditional classNames concatenation with an array
```js
import clns from 'clns';

let isFooOn = true;
let isBarOn = false;

const conditionalNames = clns([
  isFooOn && 'foo',
  isBarOn && 'bar',
  'baz'
]);

console.log(conditionalNames); // 'foo baz'
```
#

##### Conditonal styling of a React component with Tailwind classNames
```jsx
import React from 'react';
import clns from 'clns';

// A box component that can be styled with Tailwind classNames based on certain conditions.
export function Box({ className, defaultColor, children }) {

  const classes = clns([
    defaultColor ? 'bg-blue-400' : "bg-green-400", 
    'relative', 
    'w-[512px] h-[512px]',
    className,
  ]);

  return (
    <div className={classes}>
      { children }
    </div>
  );
}

function App() {  
  return (
    <Box className="border-4 border-red-600" defaultColor={false}>
      <h1>Hello World!</h1>
    </Box>
  );
}

```

Leverage the simplicity and power of CLNS to manage your classNames in a more readable and maintainable way.
