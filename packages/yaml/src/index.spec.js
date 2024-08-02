import test from "esload/test";

export default test("test.yaml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
