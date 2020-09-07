import IMailTemplateProvider from '../models/IMailTemplateProvider'
import ImailTemplateDTO from '../dtos/IParseMailTemplateDTO'

class FakeMailTemplateProvider implements IMailTemplateProvider {
    public async parse(): Promise<string> {
        return 'template';
    }
}

export default FakeMailTemplateProvider