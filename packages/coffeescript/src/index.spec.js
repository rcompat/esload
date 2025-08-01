import test from "esload/test";

export default test("test.coffee", import.meta.dirname, (assert, imported) => {
  const { foo } = imported;
  assert(typeof foo).equals("function");
});
