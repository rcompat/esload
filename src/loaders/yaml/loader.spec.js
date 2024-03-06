import { test } from "dp";

export default test("yaml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
