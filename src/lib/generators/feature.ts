import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export class FeatureGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false,
        write: boolean = false
    ) {
        if(stream) {
            // check if config has stream properties
            if(config.stream === undefined) {
                throw new Error("Stream section in provided config is undefined. It is required for streaming features.")
            }
        }
        const templateName = stream ? "feature-streaming" : "feature"
        const outputFilePath = `${config.paths.project_root}/${config.paths.features_dir}/${config.feature.kebab_case}-feature.ts`
        super(config, outputFilePath, templateName, write)
    }
}