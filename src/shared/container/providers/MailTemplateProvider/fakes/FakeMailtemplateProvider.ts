import IMailTemplateProvider from '../models/IMailTemplateProvider'
import ImailTemplateDTO from '../dtos/IParseMailTemplateDTO'

class FakeMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ template }:
        ImailTemplateDTO): Promise<string> {
        return template;
    }
}

export default FakeMailTemplateProvider