import { Util } from 'src/utils';
import { createTestTemplate } from './base-test.tempate';

const componentNameAnchor = '$$componentName';

const template = `export class $$componentName {
	constructor() {}
}`;

export const makeSimpleTemplate = (componentName: string, postfix: string, type = 'ts') => {
	const className = `${Util.upperCaseFirstLetter(componentName)}${Util.upperCaseFirstLetter(postfix)}`;
	const fileName = `${componentName}.${postfix}`;

	return {
		fileName,
		template: template.replaceAll(componentNameAnchor, className),
		templateTest: createTestTemplate(componentName, postfix, type),
	};
};
