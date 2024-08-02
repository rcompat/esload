import test from "@esload/core/test";

export default test("csv", (assert, imported) => {
  const { default: [[foo, bar]] } = imported;
  assert(foo).equals("foo");
  assert(bar).equals("bar");
});
