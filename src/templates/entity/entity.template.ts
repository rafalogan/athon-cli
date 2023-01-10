import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const fileNameAnchor = '$$fileName';
const typeAnchor = '$$type';

const template = `export class $$componentName {
	constructor() {}
}`;

const templateTest = `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { $$componentName } from './$$fileName.$$type';

describe('#Entity $$componentName', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;

export const createEntityTemplate = (componentName: string, type = 'ts') => {
	const fileName = `${Util.lowerCaseFirstLetter(componentName)}.entity`;
	return {
		fileName,
		template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
		templateTest: templateTest
			.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
			.replaceAll(fileNameAnchor, fileName)
			.replaceAll(typeAnchor, type),
	};
};
