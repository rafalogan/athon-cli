import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const fileNameAnchor = '$$fileName';
const fileTypeAnchor = '$$fileType';

const template = `export class $$componentNameConfig {
	constructor() {}
}`;

const templateText = `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { $$componentNameConfig } from './$$fileName.spec.$$fileType';

describe('#$$componentNameConfig', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;

export const createConfigTemplate = (componentName: string, type = 'ts') => {
	const fileName = `${componentName}.config`;
	return {
		fileName,
		template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName)),
		templateTest: templateText
			.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
			.replaceAll(fileNameAnchor, fileName)
			.replaceAll(fileTypeAnchor, type),
	};
};
