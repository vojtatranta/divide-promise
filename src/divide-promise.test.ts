import { dividePromise } from "./divide-promise";

describe("dividePromise", () => {
  describe("types", () => {
    it("should keep the the types of the divide() input", async () => {
      const result: ["čau", "ahoj"] = await dividePromise((divide) => {
        divide(["ahoj"] as const);

        return "čau" as const;
      });

      const [actualResult, input] = result;
      expect(actualResult).toBe("čau");
      expect(input).toEqual("ahoj");
    });

    it("should keep types of the multiple inputs", async () => {
      const result: [1, 2, 3] = await dividePromise((divide) => {
        divide([2, 3] as const);

        return 1;
      });

      const [actualResult, ...input] = result;
      expect(actualResult).toBe(1);
      expect(input).toEqual([2, 3]);
    });

    it("should keep types of the multiple inputs while mantaining individual typing of the inputs", async () => {
      const result: [1, 2, 3] = await dividePromise((divide) => {
        divide([2, 3] as const);

        return 1;
      });

      // NOTE this is a type check, it should throw anything
      const [actualResult, one, two] = result;
      const actualResultType: 1 = actualResult;
      const typeOne: 2 = one;
      const typeTwo: 3 = two;

      actualResult.toFixed();
      one.toFixed();
      two.toFixed();
    });
  });

  describe("errors", () => {
    it("should throw an error if divide() is not called", async () => {
      await expect(dividePromise(() => Promise.resolve(1))).rejects.toThrow(
        "divide(): has never been called"
      );
    });

    it("should throw an error if divide() is called multiple times", async () => {
      await expect(
        dividePromise((divide) => {
          divide([1]);
          divide([2]);
        })
      ).rejects.toThrow("divide(): called multiple times");
    });
  });
});
