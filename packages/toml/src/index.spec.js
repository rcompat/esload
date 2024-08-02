import test from "@esload/core/test";

export default test("toml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
