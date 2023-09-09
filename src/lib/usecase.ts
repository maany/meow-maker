import { TConfig } from "./types"

export class BaseUseCase {
    constructor(
        protected config: TConfig
    ) {}
    
    execute(): {
        status: boolean,
        message: string
        content: string
        file: string
    } {
        return {
            status: false,
            message: "not implemented",
            content: "",
            file: ""
        }
    }
}