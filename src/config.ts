import { TConfig } from "./lib/generators/types";

const Config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `src/lib/core/usecase-models`,
        primary_ports_dir: `src/lib/core/port/primary`,
        presenters_dir: `src/lib/infrastructure/presenter`,
        controllers_dir: `src/lib/infrastructure/controller`,
        usecases_dir: `src/lib/core/use-case`,
        features_dir: `src/lib/infrastructure/ioc/features`,
        nextjs_endpoint_dir: `src/pages/api/feature`
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
        CamelCase: "ListRSEs",
        varCamelCase: "listRSEs",
        snake_case: "list_rses",
        kebab_case: "list-rses",
    },
    viewModel: {
        name: "RSEViewModel",
        importPath: "@/lib/infrastructure/data/view-model/rse", 
        filePath: "/Users/maany/Projects/webui/src/lib/infrastructure/data/view-model/rse.ts" // exact file path with the .ts extension
    },
    stream: {
        dto: {
            name: "RSEDTO",
            importPath: "@/lib/core/dto/rse-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/rse-dto.ts"
        }
    },
    gateway: {
        name: "RSEGateway",
        varCamelCase: "rseGateway",
        kebab_case: "rse-gateway",
        snake_case: "rse_gateway",
        symbol: "RSE",
        importPath: "@/lib/infrastructure/gateway/rse-gateway/rse-gateway",
        output_port: {
            name: "RSEGatewayOutputPort",
            importPath: "@/lib/core/port/secondary/rse-gateway-output-port",
        },
        endpoint_fn: "listRSEs",
        dto: {
            name: "ListRSEsDTO",
            importPath: "@/lib/core/dto/rse-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/rse-dto.ts"
        }
    },
    nextjs_endpoint: {
        with_session: false,
        method: 'GET'
    }
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