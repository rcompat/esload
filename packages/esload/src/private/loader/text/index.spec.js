import test from "esload/test";

export default test("private/loader/text/test.txt", (assert, imported) => {
  const { default: string } = imported;
  assert(string).equals("foo bar\n");
});
