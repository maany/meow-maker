import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class PresenterGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false
    ) {
        const templateName = stream ? "presenter-streaming" : "presenter"
        const outputFilePath = `${config.paths.project_root}/${config.paths.presenters_dir}/${config.feature.kebab_case}-presenter.ts`
        super(config, outputFilePath, templateName)
    }

}