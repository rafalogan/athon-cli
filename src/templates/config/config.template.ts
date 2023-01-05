import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';

const template = `export class $$componentNameConfig {
	constructor() {}
}`;

export const createConfigTemplate = (componentName: string) => ({
	fileName: `${componentName}.config`,
	template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
});
