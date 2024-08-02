import config_filename from "#config-filename";
import root from "@rcompat/package/root";

const file = (await root()).join(config_filename);

export default await file.exists() ? await file.import("default") : {};
