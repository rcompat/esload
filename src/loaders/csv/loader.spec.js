import { test } from "dp";

export default test("csv", (assert, imported) => {
  const { default: [[foo, bar]] } = imported;
  assert(foo).equals("foo");
  assert(bar).equals("bar");
});
