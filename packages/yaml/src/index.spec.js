import test from "@esload/core/test";

export default test("yaml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
