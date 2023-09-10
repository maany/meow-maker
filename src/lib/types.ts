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

export type TConfig = {
    paths: {
      project_root: string;
      usecase_models_dir: string;
      primary_ports_dir: string;
    };
    imports: {
      core: string;
      infra: string;
      cats: string;
      usecase_models: string;
      primary_ports: string;
    };
    feature: {
      camel_case: string;
      snake_case: string;
      kebab_case: string;
    };
    viewModel: {
      name: string;
      importPath: string;
      filePath: string;
    };
    // usecase: {
    //   type: UseCaseTypes;
    //   single_endpoint: boolean;
    //   post_processing_pipeline: boolean;
    // };
    // gateway: {
    //   name: string;
    //   filename: string;
    //   output_port: string;
    //   dto: string;
    //   streamDTO: string;
    // };
};

export enum UseCaseTypes {
    BaseUseCase = "BaseUseCase",
    BaseStreamingUseCase = "BaseStreamingUseCase",
    BaseSingleEndpointUseCase = "BaseSingleEndpointUseCase",
    BaseSingleEndpointStreamingUseCase = "BaseSingleEndpointStreamingUseCase",
    BaseSingleEndpointPostProcessingPipelineUseCase = "BaseSingleEndpointPostProcessingPipelineUseCase",
    BaseSingleEndpointPostProcessingPipelineStreamingUseCase = "BaseSingleEndpointPostProcessingPipelineStreamingUseCase",
}