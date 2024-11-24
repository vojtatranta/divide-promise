# Promise Divide

![Main workflow](https://github.com/vojtatranta/divide-promise/actions/workflows/main.yml/badge.svg)

This is a utility library that helps you divide promise results into multiple parts. It's useful when you need to split promise results in a type-safe way.

## Usage

The library provides a single function `dividePromise` that allows you to split promise results. For more info, [look at the tests](https://github.com/vojtatranta/divide-promise/blob/master/src/divide-promise.test.ts).

Here's a basic example:

```ts
const [result, one, two] = await dividePromise((divide) => {
  divide([1, 2]);
  return 40;
});

// result is 40
// one is 1
// two is 2
```

## Installation

```
npm i --save divide-promise

yarn add divide-promise

pnpm i --save divide-promise

bun i --save divide-promise
```

## Testing

Standard script:

```
npm run test --all

yarn test

bun run test
```

## Contributions

You are free to use this library propose any change in a pull request.

Cheers.
