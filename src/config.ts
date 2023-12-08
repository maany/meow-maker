import { TConfig } from "./lib/generators/types";

const Config: TConfig = {
    paths: {
        project_root: "/root/Projects/webui",
        usecase_models_dir: `src/lib/core/usecase-models`,
        primary_ports_dir: `src/lib/core/port/primary`,
        presenters_dir: `src/lib/infrastructure/presenter`,
        controllers_dir: `src/lib/infrastructure/controller`,
        usecases_dir: `src/lib/core/use-case`,
        features_dir: `src/lib/infrastructure/ioc/features`,
        nextjs_endpoint_dir: `src/pages/api/feature`,
        tests_dir: "tests",
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
        tests_fixtures: "test/fixtures"

    },
    feature: {
        CamelCase: "GetAccountInfo",
        varCamelCase: "getAccountInfo",
        snake_case: "get_account_info",
        kebab_case: "get-account-info",
    },
    viewModel: {
        name: "AccountInfoViewModel",
        importPath: "@/lib/infrastructure/data/view-model/account", 
        filePath: "/root/Projects/webui/src/lib/infrastructure/data/view-model/account.ts" // exact file path with the .ts extension
    },
    // stream: {
    //     dto: {
    //         name: "RSEDTO",
    //         importPath: "@/lib/core/dto/rse-dto",
    //         filePath: "/root/Projects/webui/src/lib/core/dto/rse-dto.ts"
    //     }
    // },
    gateway: {
        name: "AccountGateway",
        varCamelCase: "accountGateway",
        kebab_case: "account-gateway",
        snake_case: "account_gateway",
        symbol: "ACCOUNT",
        importPath: "@/lib/infrastructure/gateway/rse-gateway/account-gateway",
        output_port: {
            name: "AccountGatewayOutputPort",
            importPath: "@/lib/core/port/secondary/account-gateway-output-port",
        },
        endpoint_fn: "getAccountInfo",
        dto: {
            name: "AccountInfoDTO",
            importPath: "@/lib/core/dto/account-dto",
            filePath: "/root/Projects/webui/src/lib/core/dto/account-dto.ts"
        }
    },
    nextjs_endpoint: {
        with_session: false,
        method: 'GET'
    },
    api_test: {
        dir: "account"
    },
    // pipeline: [
    //     {
    //         name: "GetRSEPipelineElement",
    //         kebab_case: "get-rse-pipeline-element",
    //         gateway: {
    //             name: "RSEGateway",
    //             varCamelCase: "rseGateway",
    //             kebab_case: "rse-gateway",
    //             snake_case: "rse_gateway",
    //             symbol: "RSE",
    //             importPath: "@/lib/infrastructure/gateway/rse-gateway/rse-gateway",
    //             output_port: {
    //                 name: "RSEGatewayOutputPort",
    //                 importPath: "@/lib/core/port/secondary/rse-gateway-output-port",
    //             },
    //             endpoint_fn: "getRSE",
    //             dto: {
    //                 name: "RSEDTO",
    //                 importPath: "@/lib/core/dto/rse-dto",
    //                 filePath: "/root/Projects/webui/src/lib/core/dto/rse-dto.ts"
    //             }
    //         }
    //     }
    // ]
}

export default Config;