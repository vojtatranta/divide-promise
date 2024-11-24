import { dividePromise } from "./divide-promise";

async function example() {
  const result = await dividePromise(async (divide) => {
    divide([10]);
    return 40;
  });
  console.log(result);
}

example();
