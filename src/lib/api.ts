import ControllerGenerator from './generators/controller'
import { FeatureGenerator } from './generators/feature'
import PresenterGenerator from './generators/presenter'
import PrimaryPortsGenerator from './generators/primary-ports'
import {
    TConfig,
    TTemplateAppenderOutput,
    TTemplateGeneratorOutput,
} from './generators/types'
import {
    BaseUseCaseGenerator,
    SingleEndpointUseCaseGenerator,
    UseCasePostProcessingPipelineGenerator,
} from './generators/usecase'
import UseCaseModelsGenerator from './generators/usecase-models'
import ViewModelAppender from './generators/viewmodel-appender'

export enum ACTION {
    UsecaseModels = 'usecase_models',
    ViewModel = 'view_model',
    PrimaryPorts = 'primary_ports',
    Presenter = 'presenter',
    Controller = 'controller',
    Usecase = 'usecase',
    Feature = 'feature',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const steps: ReadonlyArray<any> = [
    ACTION.UsecaseModels,
    ACTION.ViewModel,
    ACTION.PrimaryPorts,
    ACTION.Presenter,
    ACTION.Controller,
    ACTION.Usecase,
    ACTION.Feature,
]
function usecaseModels(config: TConfig): TTemplateGeneratorOutput {
    const usecase_models_generator = new UseCaseModelsGenerator(config)
    const output = usecase_models_generator.execute()
    return output
}

function viewModel(config: TConfig): TTemplateAppenderOutput {
    const view_model_appender = new ViewModelAppender(config)
    const viewModelAppendStatus = view_model_appender.execute()
    return viewModelAppendStatus
}

function primaryPorts(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const usecaseports = new PrimaryPortsGenerator(config, stream)
    const primaryPortsStatus = usecaseports.execute()
    return primaryPortsStatus
}

function presenter(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const presenter = new PresenterGenerator(config, stream)
    const presenterStatus = presenter.execute()
    return presenterStatus
}

function controller(config: TConfig): TTemplateGeneratorOutput {
    const controller = new ControllerGenerator(config)
    const controllerStatus = controller.execute()
    return controllerStatus
}

function usecase(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const usecase = new BaseUseCaseGenerator(config, stream)
    const usecaseStatus = usecase.execute()
    return usecaseStatus
}

function singleEndpointUseCase(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const singleEndpointUseCase = new SingleEndpointUseCaseGenerator(
        config,
        stream,
    )
    const singleEndpointUseCaseStatus = singleEndpointUseCase.execute()
    return singleEndpointUseCaseStatus
}

function pipelineUseCase(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const pipelineUseCase = new UseCasePostProcessingPipelineGenerator(
        config,
        stream,
    )
    const pipelineUseCaseStatus = pipelineUseCase.execute()
    return pipelineUseCaseStatus
}

function feature(
    config: TConfig,
    stream: boolean = false,
): TTemplateGeneratorOutput {
    const feature = new FeatureGenerator(config, stream)
    const featureStatus = feature.execute()
    return featureStatus
}

export function execute(
    step: ACTION,
    config: TConfig,
    write: boolean = false,
): TTemplateAppenderOutput | TTemplateGeneratorOutput {
    const stream = config.stream !== undefined
    const pipeline = config.pipeline !== undefined
    const singleEndpoint = config.gateway !== undefined
    let output: TTemplateAppenderOutput | TTemplateGeneratorOutput
    switch (step) {
        case ACTION.UsecaseModels:
            output = usecaseModels(config)
            break
        case ACTION.ViewModel:
            output = viewModel(config)
            break
        case ACTION.PrimaryPorts:
            output = primaryPorts(config, stream)
            break
        case ACTION.Presenter:
            output = presenter(config, stream)
            break

        case ACTION.Usecase:
            if (pipeline) {
                output = pipelineUseCase(config, stream)
                break
            }
            if (singleEndpoint) {
                output = singleEndpointUseCase(config, stream)
                break
            }
            output = usecase(config, stream)
            break
        case ACTION.Controller:
            output = controller(config)
            break
        case ACTION.Feature:
            output = feature(config, stream)
            break
        default:
            throw new Error('Invalid step')
    }

    if (write) {
        console.log(`writing!!!`)
    }
    return output
}
