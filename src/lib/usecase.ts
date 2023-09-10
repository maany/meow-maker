import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types"

export class BaseUseCaseGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false
    ) {
        if(stream) {
            // check if config has stream properties
            if(config.stream === undefined) {
                throw new Error("Stream section in provided config is undefined. It is required for streaming usecases.")
            }
        }
        const templateName = stream ? "usecase-base-streaming" : "usecase-base"
        const outputFilePath = `${config.paths.project_root}/${config.paths.usecases_dir}/${config.feature.kebab_case}-usecase.ts`
        super(config, outputFilePath, templateName)
    }
}

export class SingleEndpointUseCaseGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        stream: boolean = false
    ) {
        if(stream) {
            // check if config has stream properties
            if(config.stream === undefined) {
                throw new Error("Stream section in provided config is undefined. It is required for streaming usecases.")
            }
        }
        // check if gateway section is provided
        if(config.gateway === undefined) {
            throw new Error("Gateway section in provided config is undefined. It is required for single endpoint usecases.")
        }
        const templateName = stream ? "usecase-single-endpoint-streaming" : "usecase-single-endpoint"
        const outputFilePath = `${config.paths.project_root}/${config.paths.usecases_dir}/${config.feature.kebab_case}-usecase.ts`
        super(config, outputFilePath, templateName)
    }
}