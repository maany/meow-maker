"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const liquidjs_1 = require("liquidjs");
const types_1 = require("./lib/types");
const engine = new liquidjs_1.Liquid({
    root: `${__dirname}/../templates`,
    extname: '.liquid'
});
const config = {
    paths: {
        project_root: "/Users/maany/Projects/webui",
        project_src_root: "/Users/maany/Projects/webui/src",
        project_core_path: "/Users/maany/Projects/webui/src/lib/core",
        project_infra_path: "/Users/maany/Projects/webui/src/lib/infrastructure",
        project_tests_root: "/Users/maany/Projects/webui/test",
    },
    imports: {
        core: "@/lib/core",
        infra: "@/lib/infrastructure",
    },
    feature: {
        feature_camel_case: "ListDIDRules",
        feature_snake_case: "list_did_rules",
        feature_kebab_case: "list-did-rules",
    },
    viewModel: {
        name: "ListDIDRulesViewModel",
        importPath: "@/lib/infrastructure/data/view-model",
        filePath: "/Users/maany/Projects/webui/src/lib/infrastructure/data/view-model/did.ts" // exact file path with the .ts extension
    },
    usecase: {
        type: types_1.UseCaseTypes.BaseUseCase,
        single_endpoint: true,
        post_processing_pipeline: true,
    },
    gateway: {
        name: "DIDGateway",
        filename: "did-gateway-output-port",
        output_port: "DIDGatewayOutputPort",
        dto: "DIDDTO",
        streamDTO: "ListDIDDTO",
    }
};
// check if core and infra src exists
// check if gateway exists
// check if viewmodel exists, if defined
// IMPORT PATHS 
const importCore = (_a = config.imports.core) !== null && _a !== void 0 ? _a : `@/lib/core`;
const importInfra = (_b = config.imports.infra) !== null && _b !== void 0 ? _b : `@/lib/infrastructure`;
const viewModelClassName = (_c = config.viewModel.name) !== null && _c !== void 0 ? _c : `${config.feature.feature_camel_case}ViewModel`;
const viewModelFile = (_d = config.viewModel.filePath) !== null && _d !== void 0 ? _d : `${importInfra}/data/view-model/${config.feature.feature_kebab_case}.ts`;
const importViewModelStatement = `import { ${viewModelClassName} } from "${viewModelFile.split('.ts')[0]}";`;
const usecase_models_content = engine.renderFileSync("usecase-models.liquid", config);
const base_usecase_ports_content = engine.renderFileSync("primary-ports-non-streaming.liquid", config);
const base_streaming_usecase_ports_content = engine.renderFileSync("primary-ports-streaming.liquid", config);
const view_model_content = `export interface ${config.viewModel.name} extends BaseViewModel {}`;
// check if viewmodel file exists
// if not, create it
// if yes, append the viewmodel interface to it
// const viewModelFilePath = `${config.paths.project_infra_path}/${}.ts`
console.log(base_streaming_usecase_ports_content);
//# sourceMappingURL=index.js.map