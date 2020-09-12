import handlebars from 'handlebars'
import fs from 'fs'

import IMailTemplateProvider from '../models/IMailTemplateProvider'
import ImailTemplateDTO from '../dtos/IParseMailTemplateDTO'

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ file, variables }:
        ImailTemplateDTO): Promise<string> {
        const templateFileContent = await fs.promises.readFile(file, {
            encoding: 'utf-8',

        })
        const parseTemplate = handlebars.compile(templateFileContent)

        return parseTemplate(variables)
    }
}

export default HandlebarsMailTemplateProvider