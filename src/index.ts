import PresenterGenerator from "./lib/presenter"
import PrimaryPortsGenerator from "./lib/primary-ports"
import { TConfig } from "./lib/types"
import UseCaseModelsGenerator from "./lib/usecase-models"
import ViewModelAppender from "./lib/viewmodel-appender"

const config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `/src/lib/core/usecase-models`,
        primary_ports_dir: `/src/lib/core/ports/primary`,
    },
    imports: {
        core: "@/lib/core",
        infra: "@/lib/infrastructure",
        cats: "@/lib/sdk",
        usecase_models: "@/lib/core/usecase-models",
        primary_ports: "@/lib/core/ports/primary",
    },
    feature: {
        camel_case: "ListDIDRules",
        snake_case: "list_did_rules",
        kebab_case: "list-did-rules",
    },
    viewModel: {
        name: "ListDIDRulesViewModel",
        importPath: "@/lib/infrastructure/data/view-model/did", 
        filePath: "/Users/maany/Projects/webui/tools/meow-maker/did.ts" // exact file path with the .ts extension
    },
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


const view_model_appender = new ViewModelAppender(config)
console.log("********************")
const viewModelAppendStatus = view_model_appender.execute()
console.log(viewModelAppendStatus)
console.log("********************")


const usecaseports = new PrimaryPortsGenerator(config, true)
console.log("********************")
const primaryPortsStatus = usecaseports.execute()
console.log(primaryPortsStatus)


const presenter = new PresenterGenerator(config, false)
console.log("********************")
const presenterStatus = presenter.execute()
console.log(presenterStatus)