import test from "esload/test";

export default test("private/loader/json/test.json", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
