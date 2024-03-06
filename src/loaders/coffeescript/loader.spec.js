import { test } from "dp";

export default test("coffeescript", ".coffee", (assert, imported) => {
  const { foo } = imported;
  assert(foo).typeof("function");
});
