import test from "esload/test";

export default test("test.json5", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
