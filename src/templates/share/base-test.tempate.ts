import { Util } from 'src/utils';

const componentNameAnchor = '$$componentName';
const fileNameAnchor = '$$fileName';
const fileTypeAnchor = '$$fileType';

const templateText = `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { $$componentName } from './$$fileName.$$fileType';

describe('#$$componentName', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;

export const createTestTemplate = (componentName: string, postFix: string, type = 'ts') => {
	const className = `${Util.upperCaseFirstLetter(componentName)}${Util.upperCaseFirstLetter(postFix)}`;
	const fileName = `${componentName}.${postFix}`;

	return templateText
		.replaceAll(componentNameAnchor, className)
		.replaceAll(fileNameAnchor, fileName)
		.replaceAll(fileTypeAnchor, type);
};
