import { TConfig } from "./lib/types"
import UseCaseModelsGenerator from "./lib/usecase-models"

const config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `/src/lib/core/usecase-models`,
    },
    imports: {
        core: "@/lib/core",
        infra: "@/lib/infrastructure",
        cats: "@/lib/sdk",
        usecase_models: "@/lib/core/usecase-models",
    },
    feature: {
        camel_case: "ListDIDRules",
        snake_case: "list_did_rules",
        kebab_case: "list-did-rules",
    },
    // viewModel: {
    //     name: "ListDIDRulesViewModel",
    //     importPath: "@/lib/infrastructure/data/view-model", 
    //     filePath: "/Users/maany/Projects/webui/src/lib/infrastructure/data/view-model/did.ts" // exact file path with the .ts extension
    // },
    // usecase: {
    //     type: UseCaseTypes.BaseUseCase,
    //     single_endpoint: true,
    //     post_processing_pipeline: true,
    // },
    // gateway: {
    //     name: "DIDGateway",
    //     filename: "did-gateway-output-port",
    //     output_port: "DIDGatewayOutputPort",
    //     dto: "DIDDTO",
    //     streamDTO: "ListDIDDTO",
    // }
}


const usecase_models_generator = new UseCaseModelsGenerator(config)
console.log("********************")
const { content, file } = usecase_models_generator.execute()
console.log(file)
console.log(content)
console.log("********************")
// check if core and infra src exists

// check if gateway exists

// check if viewmodel exists, if defined



// // IMPORT PATHS 
// const importCore = config.imports.core ?? `@/lib/core`
// const importInfra = config.imports.infra ?? `@/lib/infrastructure`

// const viewModelClassName = config.viewModel.name ?? `${config.feature.feature_camel_case}ViewModel`
// const viewModelFile = config.viewModel.filePath ?? `${importInfra}/data/view-model/${config.feature.feature_kebab_case}.ts`
// const importViewModelStatement = `import { ${viewModelClassName} } from "${viewModelFile.split('.ts')[0]}";`


// const usecase_models_content = engine.renderFileSync("usecase-models.liquid", config)


// const base_usecase_ports_content = engine.renderFileSync("primary-ports-non-streaming.liquid", config)


// const base_streaming_usecase_ports_content = engine.renderFileSync("primary-ports-streaming.liquid", config)

// const view_model_content = `export interface ${config.viewModel.name} extends BaseViewModel {}`
// // check if viewmodel file exists
// // if not, create it
// // if yes, append the viewmodel interface to it
// // const viewModelFilePath = `${config.paths.project_infra_path}/${}.ts`

// console.log(base_streaming_usecase_ports_content)

