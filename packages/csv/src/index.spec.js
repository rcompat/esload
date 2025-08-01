import test from "esload/test";

export default test("test.csv", import.meta.dirname, (assert, imported) => {
  const { default: [[foo, bar]] } = imported;
  assert(foo).equals("foo");
  assert(bar).equals("bar");
});
