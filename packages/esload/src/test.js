import register from "esload/register";
import root from "@rcompat/package/root";

export default (path, body) => test => {
  test.case("load", async assert => {
    register(true);
    try {
      const testfile = (await root()).join(`src/${path}`);
      await body(assert, await testfile.import());
    } catch (error) {
      body(assert, error);
    }
  });
};
