import test from "@esload/core/test";

export default test("marko", (assert, imported) => {
  const { default: { ___typeName, path, _ } } = imported;
  assert(___typeName).equals("");
  assert(path).equals("");
  assert(_).typeof("function");
});
