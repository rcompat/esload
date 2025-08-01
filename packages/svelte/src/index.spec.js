import test from "esload/test";

export default test("test.svelte", import.meta.dirname, (assert, imported) => {
  const { default: { render } } = imported;
  assert(typeof render).equals("function");
  assert(render({ bar: "bar" }).html).equals("foo, bar");
});
