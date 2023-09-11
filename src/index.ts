import ControllerGenerator from "./lib/controller"
import PipelineElementGenerator from "./lib/pipeline-element"
import PresenterGenerator from "./lib/presenter"
import PrimaryPortsGenerator from "./lib/primary-ports"
import { TConfig } from "./lib/types"
import { BaseUseCaseGenerator, SingleEndpointUseCaseGenerator } from "./lib/usecase"
import UseCaseModelsGenerator from "./lib/usecase-models"
import ViewModelAppender from "./lib/viewmodel-appender"

const config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `src/lib/core/usecase-models`,
        primary_ports_dir: `src/lib/core/ports/primary`,
        presenters_dir: `src/lib/infrastructure/presenter`,
        controllers_dir: `src/lib/infrastructure/controller`,
        usecases_dir: `src/lib/core/use-case`,
    },
    imports: {
        core: "@/lib/core",
        infra: "@/lib/infrastructure",
        cats: "@/lib/sdk",
        usecase_models: "@/lib/core/usecase-models",
        primary_ports: "@/lib/core/ports/primary",
        presenter: "@/lib/infrastructure/presenter",
        controller: "@/lib/infrastructure/controller",
        usecase: "@/lib/core/use-case",

    },
    feature: {
        CamelCase: "ListDIDRules",
        varCamelCase: "listDIDRules",
        snake_case: "list_did_rules",
        kebab_case: "list-did-rules",
    },
    viewModel: {
        name: "ListDIDRulesViewModel",
        importPath: "@/lib/infrastructure/data/view-model/did", 
        filePath: "/Users/maany/Projects/webui/tools/meow-maker/did.ts" // exact file path with the .ts extension
    },
    stream: {
        dto: {
            name: "DIDDTO",
            importPath: "@/lib/infrastructure/data/dto/did",
            filePath: "/Users/maany/Projects/webui/tools/meow-maker/did.ts"
        }
    },
    gateway: {
        name: "DIDGateway",
        kebab_case: "did-gateway",
        importPath: "@/lib/infrastructure/gateway/did",
        output_port: {
            name: "DIDGatewayOutputPort",
            importPath: "@/lib/core/ports/secondary/did-gateway-output-port",
        },
        endpoint_fn: "listDIDRules",
        dto: {
            name: "ListDIDDTO",
            importPath: "@/lib/core/data/dto/did",
            filePath: "/Users/maany/Projects/webui/tools/meow-maker/did.ts"
        }
    },
    pipeline: [
        {
            name: "GetSubcriptionListDIDsPipelineElement",
            kebab_case: "get-subscriptions-pipeline-element",
            gateway: {
                name: "SubscriptionsGateway",
                kebab_case: "subscriptions-gateway",
                importPath: "@/lib/infrastructure/gateway/subscriptions",
                output_port: {
                    name: "SubscriptionsGatewayOutputPort",
                    importPath: "@/lib/core/ports/secondary/subscriptions-gateway-output-port",
                },
                endpoint_fn: "getSubscriptions",
                dto: {
                    name: "GetSubscriptionsDTO",
                    importPath: "@/lib/core/data/dto/subscriptions",
                    filePath: "/Users/maany/Projects/webui/tools/meow-maker/subscriptions.ts"
                }
            }
        }
    ]
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


const controller = new ControllerGenerator(config)
console.log("********************")
const controllerStatus = controller.execute()
console.log(controllerStatus)


const usecase = new BaseUseCaseGenerator(config, true)
console.log("********************")
const usecaseStatus = usecase.execute()
console.log(usecaseStatus)


const singleEndpointUseCase = new SingleEndpointUseCaseGenerator(config, true)
console.log("********************")
const singleEndpointUseCaseStatus = singleEndpointUseCase.execute()
console.log(singleEndpointUseCaseStatus)


const pipelineElement = new PipelineElementGenerator(config, 0, true)
console.log("********************")
const pipelineElementStatus = pipelineElement.execute()
console.log(pipelineElementStatus)