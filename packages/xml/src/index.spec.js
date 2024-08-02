import test from "esload/test";

export default test("test.xml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo.bar).equals([""]);
});
