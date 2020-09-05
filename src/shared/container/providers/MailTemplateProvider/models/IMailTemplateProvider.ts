import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO'

export default interface IModelTemplateProvider {
    parse(data: IParseTemplateDTO): Promise<string>{

}
}