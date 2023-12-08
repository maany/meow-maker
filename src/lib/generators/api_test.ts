import { BaseCompiledTemplate } from "./base"
import { TConfig } from "./types"

export default class APITestGenerator extends BaseCompiledTemplate {
    constructor(
        config: TConfig,
        write: boolean = false
    ) {
        const templateName = "test-api"
        const outputFilePath = `${config.paths.project_root}/${config.paths.tests_dir}/${config.api_test?.dir}/${config.feature.kebab_case}.test.ts`
        super(config, outputFilePath, templateName, write)
    }
}