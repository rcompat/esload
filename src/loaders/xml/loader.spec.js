import { test } from "dp";

export default test("xml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo.bar).equals([""]);
});
