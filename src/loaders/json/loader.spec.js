import { test } from "dp";

export default test("toml", (assert, imported) => {
  const { default: { foo } } = imported;
  assert(foo).equals("bar");
});
