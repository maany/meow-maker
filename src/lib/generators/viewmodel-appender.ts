import { BaseExistingFileAppender } from "./base";
import { TConfig } from "./types";

export default class ViewModelAppender extends BaseExistingFileAppender {
    constructor(
        config: TConfig,
        write: boolean = false
    ) {
        super(config, config.viewModel.filePath, write)
    }

    importSection(): string | undefined {
        return undefined
    }
    content(): string {
        const content = `export interface ${this.config.viewModel.name} extends BaseViewModel {}`
        const emptyFn = `export const getEmpty${this.config.viewModel.name} = (): ${this.config.viewModel.name} => { // TODO: return empty ${this.config.viewModel.name}`
        return content + "\n" + emptyFn
    }

}