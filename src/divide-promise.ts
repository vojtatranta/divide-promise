export async function dividePromise<T extends readonly any[], R extends any>(
  promiseFactory: (divide: (input: T) => T) => Promise<R> | R
): Promise<[R, ...T]> {
  let inputs: T | undefined = undefined;
  const divide = (input: T) => {
    if (inputs) {
      throw new Error("divide(): called multiple times");
    }
    inputs = input;
    return inputs;
  };

  const promiseResults = await promiseFactory(divide);
  if (!inputs) {
    throw new Error("divide(): has never been called");
  }

  return [promiseResults, ...inputs] as [R, ...T];
}
