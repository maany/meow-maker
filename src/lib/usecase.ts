import { BaseCompiledTemplate } from "./base";
import PipelineElementGenerator from "./pipeline-element";
import { TConfig, TPipelineElement } from "./types"

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

export class UseCasePostProcessingPipelineGenerator extends BaseCompiledTemplate {

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
            throw new Error("Gateway section in provided config is undefined. It is required for single endpoint usecases. Post Processing pipeline usecases are also single endpoint usecases.")
        }
        // check if pipeline section is provided
        if(config.pipeline === undefined) {
            throw new Error("Pipeline section in provided config is undefined. It is required for post processing pipeline usecases.")
        }
        // check if length of pipeline is at least 1
        if(config.pipeline.length < 1) {
            throw new Error("Pipeline section in provided config has length less than 1. It is required for post processing pipeline usecases.")
        }
        const templateName = stream ? "usecase-post-processing-pipeline-streaming" : "usecase-post-processing-pipeline"
        const outputFilePath = `${config.paths.project_root}/${config.paths.usecases_dir}/${config.feature.kebab_case}/${config.feature.kebab_case}-usecase.ts`
        super(config, outputFilePath, templateName)
        
        for (let i = 0; i < config.pipeline.length; i++) {
            const pipelineElement = config.pipeline[i] as TPipelineElement
            console.log(`Generating pipeline element ${pipelineElement.name}`)
            const generator = new PipelineElementGenerator(config, i, stream)
            const pipelineElementStatus = generator.execute()
            console.log(`Pipeline element ${pipelineElement.name} generated successfully.`)
            console.log(pipelineElementStatus)

        }
    }
}