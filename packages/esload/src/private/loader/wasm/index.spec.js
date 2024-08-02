import test from "@esload/core/test";

export default test("wasm", (assert, imported) => {
  const { add } = imported;
  assert(add(0, 1)).equals(1);
});
