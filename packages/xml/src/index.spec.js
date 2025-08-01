import test from "esload/test";

export default test("test.xml", import.meta.dirname, (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo.bar).equals([""]);
});
