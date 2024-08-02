import test from "@esload/core/test";

export default test("xml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo.bar).equals([""]);
});
