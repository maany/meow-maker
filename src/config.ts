import { TConfig } from "./lib/generators/types";

const Config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `src/lib/core/usecase-models`,
        primary_ports_dir: `src/lib/core/port/primary`,
        presenters_dir: `src/lib/infrastructure/presenter`,
        controllers_dir: `src/lib/infrastructure/controller`,
        usecases_dir: `src/lib/core/use-case`,
        features_dir: `src/lib/infrastructure/ioc/features`
    },
    imports: {
        core: "@/lib/core",
        infra: "@/lib/infrastructure",
        cats: "@/lib/sdk",
        usecase_models: "@/lib/core/usecase-models",
        primary_ports: "@/lib/core/port/primary",
        presenter: "@/lib/infrastructure/presenter",
        controller: "@/lib/infrastructure/controller",
        usecase: "@/lib/core/use-case",
        feature: "@/lib/infrastructure/ioc/features",
        ioc: "@/lib/infrastructure/ioc",

    },
    feature: {
        CamelCase: "ListDIDParents",
        varCamelCase: "listDIDParents",
        snake_case: "list_did_parents",
        kebab_case: "list-did-parents",
    },
    viewModel: {
        name: "DIDViewModel",
        importPath: "@/lib/infrastructure/data/view-model/did", 
        filePath: "/Users/maany/Projects/webui/src/lib/infrastructure/data/view-model/did" // exact file path with the .ts extension
    },
    stream: {
        dto: {
            name: "DIDParentDTO",
            importPath: "@/lib/core/dto/did-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/did-dto.ts"
        }
    },
    gateway: {
        name: "DIDGateway",
        varCamelCase: "didGateway",
        kebab_case: "did-gateway",
        snake_case: "did_gateway",
        symbol: "DID",
        importPath: "@/lib/infrastructure/gateway/did-gateway/did-gateway",
        output_port: {
            name: "DIDGatewayOutputPort",
            importPath: "@/lib/core/port/secondary/did-gateway-output-port",
        },
        endpoint_fn: "listDIDParents",
        dto: {
            name: "ListDIDDTO",
            importPath: "@/lib/core/dto/did-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/did-dto.ts"
        }
    },
    // pipeline: [
    //     {
    //         name: "GetSubcriptionListDIDsPipelineElement",
    //         kebab_case: "get-subscriptions-pipeline-element",
    //         gateway: {
    //             name: "SubscriptionsGateway",
    //             varCamelCase: "subscriptionsGateway",
    //             kebab_case: "subscriptions-gateway",
    //             snake_case: "subscriptions_gateway",
    //             symbol: SUBCRIPTIONS
    //             importPath: "@/lib/infrastructure/gateway/subscriptions",
    //             output_port: {
    //                 name: "SubscriptionsGatewayOutputPort",
    //                 importPath: "@/lib/core/port/secondary/subscriptions-gateway-output-port",
    //             },
    //             endpoint_fn: "getSubscriptions",
    //             dto: {
    //                 name: "GetSubscriptionsDTO",
    //                 importPath: "@/lib/core/data/dto/subscriptions",
    //                 filePath: "/Users/maany/Projects/webui/tools/meow-maker/subscriptions.ts"
    //             }
    //         }
    //     }
    // ]
}

export default Config;