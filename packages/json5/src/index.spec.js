import test from "@esload/core/test";

export default test("json5", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
