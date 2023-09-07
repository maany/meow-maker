import { TConfig } from "./types";
import { existsSync } from "fs";
import { Liquid } from "liquidjs";


export abstract class BaseCompiledTemplate<TValues extends object> {
    protected engine: Liquid

    constructor(
        protected config: TConfig, 
        protected outputFilePath: string,
        protected templateName: string, 
    ) {
        const templateDir = `${__dirname}/../templates`
        const templatePath = `${templateDir}/${templateName}.liquid`

        if(!existsSync(templatePath)) throw new Error(`templatePath ${templatePath} does not exist`)
        this.engine = new Liquid({
            root: templateDir,
            extname: '.liquid'
        })
    } 

    abstract convertConfigToValues(config: TConfig): { status: boolean, message: string, values: TValues }

    execute(): {
        status: boolean,
        message: string
        content: string
        file: string

    } {
        try {
            const { status, message, values } = this.convertConfigToValues(this.config)
            if(!status) throw new Error(`error converting config to values. ${message}`)

            console.log(`rendering template ${this.templateName}`)
            const content = this.engine.renderFileSync(this.templateName, values)
            console.log(`output file ${this.outputFilePath} created`)
            return {
                status: true,
                message: `output file ${this.outputFilePath} created`,
                content: content,
                file: this.outputFilePath
            }
        } catch(e: unknown) {
            console.log(`error rendering template ${this.templateName}`)
            console.log(e as Error)
            return {
                status: false,
                message: `error rendering template ${this.templateName}`,
                content: e as string,
                file: this.outputFilePath
            }
        }
    }
}

export abstract class BaseExistingFileAppender {
    constructor(
        protected config: TConfig,
        protected outputFilePath: string,
    ) {
        if(!existsSync(outputFilePath)) {
            throw new Error(`outputFilePath ${this.outputFilePath} does not exist`)
        }
    }

    abstract importSection(): string

    abstract content(): string

    execute(): void {
        
    }
}

