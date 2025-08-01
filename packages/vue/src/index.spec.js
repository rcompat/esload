import test from "esload/test";

export default test("test.vue", import.meta.dirname, (assert, imported) => {
  const { render } = imported;
  assert(render({ foo: "bar" })).equals("bar");
});
