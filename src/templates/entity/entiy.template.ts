import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const template = `export class $$componentNameEntity {
	constructor(params: any) {}
}`;

export const createEntityTemplate = (componentName: string) => ({
	fileName: `${componentName}.entity`,
	template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
});
