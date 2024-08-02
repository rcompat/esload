import test from "@esload/core/test";

export default test("vue", (assert, imported) => {
  const { render } = imported;
  assert(render({ foo: "bar" })).equals("bar");
});
