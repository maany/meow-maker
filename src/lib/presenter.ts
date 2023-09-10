import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class PresenterGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false
    ) {
        const templateName = stream ? "presenter-streaming" : "presenter"
        const outputFilePath = `${config.paths.project_root}/${config.paths.primary_ports_dir}/${config.feature.kebab_case}-ports.ts`
        super(config, outputFilePath, templateName)
    }

}