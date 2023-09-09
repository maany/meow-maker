import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class PrimaryPortsGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false
    ) {
        const templateName = stream ? "primary-ports-streaming" : "primary-ports"
        const outputFilePath = `${config.paths.project_root}/${config.paths.primary_ports_dir}/${config.feature.kebab_case}-ports.ts`
        super(config, outputFilePath, templateName)
    }

}