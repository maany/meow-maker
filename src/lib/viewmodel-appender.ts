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
        return content
    }

}