import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const template = `export class $$componentNameService {
	constructor() {}
}`;

export const createServiceTemplate = (componentName: string) => ({
	fileName: `${componentName}.service`,
	template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
});
