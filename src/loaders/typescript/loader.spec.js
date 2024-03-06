import { test } from "dp";

export default test("typescript", ".ts", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
