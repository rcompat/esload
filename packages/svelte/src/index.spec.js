import test from "esload/test";

export default test("test.svelte", (assert, imported) => {
  const { default: { render } } = imported;
  assert(render).typeof("function");
  assert(render({ bar: "bar" }).html).equals("foo, bar");
});
