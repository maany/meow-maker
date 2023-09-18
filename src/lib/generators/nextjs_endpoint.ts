import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export class NextJSEndpointGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        write: boolean = false
    ) {
        const templateName = "nextjs-endpoint"
        const outputFilePath = `${config.paths.project_root}/${config.paths.nextjs_endpoint_dir}/${config.feature.kebab_case}.ts`
        super(config, outputFilePath, templateName, write)
    }
}