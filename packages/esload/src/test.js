import root from "@rcompat/package/root";
import test from "@rcompat/test";
import register from "esload/register";

export default (path, base, body) => {
  test.case("load", async assert => {
    register(true);
    try {
      const testfile = (await root(base)).join(`src/${path}`);
      await body(assert, await testfile.import());
    } catch (error) {
      body(assert, error);
    }
  });
};
