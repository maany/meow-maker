import { TConfig } from "./lib/generators/types";

const Config: TConfig = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        usecase_models_dir: `src/lib/core/usecase-models`,
        primary_ports_dir: `src/lib/core/ports/primary`,
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

export default Config;