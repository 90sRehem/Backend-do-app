import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO'

export default interface IMaillTemplateProvider {
    parse(data: IParseTemplateDTO): Promise<string>;
}
