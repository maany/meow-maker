import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class PipelineElementGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        index: number = 0,
        stream: boolean = false
    ) {
        if(config.pipeline === undefined || config.pipeline.length > index + 1) {
            throw new Error("Pipeline Elements must be specified in the config")
        }
        const templateName = stream? "pipeline-element-streaming": "pipeline-element"
        const outputFilePath = `${config.paths.project_root}/${config.paths.usecases_dir}/${config.feature.kebab_case}/pipeline-element-${config.pipeline[index].kebab_case}.ts`
        // deep copy config, add current_pipeline_element section
        config.current_pipeline_element = config.pipeline[index]
        super(config, outputFilePath, templateName)
    }
}