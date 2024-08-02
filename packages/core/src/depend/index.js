import bold from "@rcompat/cli/color/bold";
import red from "@rcompat/cli/color/red";
import yellow from "@rcompat/cli/color/yellow";
import tryreturn from "@rcompat/async/tryreturn";

const MODULE_NOT_FOUND = "ERR_MODULE_NOT_FOUND";

const error_message = (loader, dependencies) =>
  `${red("ERROR")} missing dependencies for loader \`${yellow(loader)}\`
  -> install with ${bold(`npm install ${dependencies.join(" ")}`)}`;

export default async (dependencies, loader) => {
  const missing = (await Promise.all(dependencies.map(dependency =>
    tryreturn(async _ => {
      await import(dependency);
      return null;
    }).orelse(({ code }) => code === MODULE_NOT_FOUND ? dependency : null)))
  ).filter(failed => failed !== null);

  if (missing.length > 0) {
    console.log(error_message(loader, missing));
  }
};
