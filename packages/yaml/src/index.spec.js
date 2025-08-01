import test from "esload/test";

export default test("test.yaml", import.meta.dirname, (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
