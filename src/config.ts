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
        CamelCase: "ListDatasetReplicas",
        varCamelCase: "listDatasetReplicas",
        snake_case: "list_dataset_replicas",
        kebab_case: "list-dataset-replicas",
    },
    viewModel: {
        name: "DIDDatasetReplicasViewModel",
        importPath: "@/lib/infrastructure/data/view-model/did", 
        filePath: "/Users/maany/Projects/webui/src/lib/infrastructure/data/view-model/did.ts" // exact file path with the .ts extension
    },
    stream: {
        dto: {
            name: "DatasetReplicasDTO",
            importPath: "@/lib/core/dto/replica-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/replica-dto.ts"
        }
    },
    gateway: {
        name: "ReplicaGateway",
        varCamelCase: "replicaGateway",
        kebab_case: "replica-gateway",
        snake_case: "replica_gateway",
        symbol: "REPLICA",
        importPath: "@/lib/infrastructure/gateway/replica-gateway/replica-gateway",
        output_port: {
            name: "ReplicaGatewayOutputPort",
            importPath: "@/lib/core/port/secondary/replica-gateway-output-port",
        },
        endpoint_fn: "listDatasetReplicas",
        dto: {
            name: "ListReplicasDTO",
            importPath: "@/lib/core/dto/replica-dto",
            filePath: "/Users/maany/Projects/webui/src/lib/core/dto/replica-dto.ts"
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