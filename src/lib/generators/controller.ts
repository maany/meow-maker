import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class ControllerGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        write: boolean = false
    ) {
        const templateName = "controller"
        const outputFilePath = `${config.paths.project_root}/${config.paths.controllers_dir}/${config.feature.kebab_case}-controller.ts`
        super(config, outputFilePath, templateName, write)
    }
}