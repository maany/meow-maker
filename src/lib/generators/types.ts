export type TValues = {
    importCore: string;
    importInfra: string;
    importViewModelStatement: string;
    viewModelClassName: string;
    viewModelFile: string;
    usecase_models_content: string;
    base_usecase_ports_content: string;
    base_streaming_usecase_ports_content: string;
    view_model_content: string;
    usecase_content: string;
    usecase_streaming_content: string;
}

export type TGateway = {
    name: string;
    kebab_case: string;
    importPath: string;
    output_port: {
      name: string;
      importPath: string;
    };
    endpoint_fn: string;
    dto: {
      name: string;
      importPath: string;
      filePath: string;
    }
}

export type TPipelineElement = {
  gateway: TGateway
  name: string
  kebab_case: string
}

export type TConfig = {
    paths: {
      project_root: string;
      usecase_models_dir: string;
      primary_ports_dir: string;
      presenters_dir: string;
      controllers_dir: string;
      usecases_dir: string;
      features_dir: string
    };
    imports: {
      core: string;
      infra: string;
      cats: string;
      usecase_models: string;
      primary_ports: string;
      presenter: string;
      controller: string;
      usecase: string;
    };
    feature: {
      CamelCase: string;
      varCamelCase: string;
      snake_case: string;
      kebab_case: string;
    };
    viewModel: {
      name: string;
      importPath: string;
      filePath: string;
    };
    stream?: {
      dto: {
        name: string
        importPath: string
        filePath: string
      }
    }
    gateway?: TGateway
    pipeline?: [TPipelineElement]
    current_pipeline_element?: TPipelineElement 
};

export enum UseCaseTypes {
    BaseUseCase = "BaseUseCase",
    BaseStreamingUseCase = "BaseStreamingUseCase",
    BaseSingleEndpointUseCase = "BaseSingleEndpointUseCase",
    BaseSingleEndpointStreamingUseCase = "BaseSingleEndpointStreamingUseCase",
    BaseSingleEndpointPostProcessingPipelineUseCase = "BaseSingleEndpointPostProcessingPipelineUseCase",
    BaseSingleEndpointPostProcessingPipelineStreamingUseCase = "BaseSingleEndpointPostProcessingPipelineStreamingUseCase",
}

export type TTemplateGeneratorOutput = {
  status: boolean,
  message: string
  content: string
  file: string

} 

export type TTemplateAppenderOutput = {
  status: boolean,
  message: string
  content: string
  importSection: string | undefined
  file: string
}