import { BaseCompiledTemplate } from "./base";
import { TConfig } from "./types";

export default class UseCaseModelsGenerator extends BaseCompiledTemplate<TConfig> {
    constructor(
        config : TConfig,
    ) {
        const outputFilePath = `${config.paths.project_root}/${config.paths.usecase_models_dir}/${config.feature.kebab_case}-usecase-models.ts`
        super(config, outputFilePath, "usecase-models")
    }

    convertConfigToValues(config: TConfig): { status: boolean, message: string, values: TConfig} {
        return {
            status: true,
            message: `converted config to values`,
            values: config
        }
    }
}