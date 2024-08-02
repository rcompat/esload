import test from "esload/test";

export default test("test.ts", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
