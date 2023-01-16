import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const template = `export interface I$$componentName {}`;

export const createInterfaceTemplate = (componentName: string) => ({
	fileName: componentName,
	template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
});
