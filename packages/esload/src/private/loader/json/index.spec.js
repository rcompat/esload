import test from "@esload/core/test";

export default test("json", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
