import test from "esload/test";

export default test("test.marko", (assert, imported) => {
  const { default: { ___typeName, path, _ } } = imported;
  assert(___typeName).equals("");
  assert(path).equals("");
  assert(_).typeof("function");
});
