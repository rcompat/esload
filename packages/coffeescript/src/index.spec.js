import test from "esload/test";

export default test("test.coffee", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
