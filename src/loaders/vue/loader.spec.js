import { test } from "dp";

export default test("vue", (assert, imported) => {
  const { render } = imported;
  assert(render({ foo: "bar" })).equals("bar");
});
