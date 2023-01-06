import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockConfigTestTemplate from '../../../database/test/mocks/mock-config-test.template';
import mockTemplateConfg from '../../../database/test/mocks/mock-template.confg';
import { createConfigTemplate } from './config.template';

describe('#TmplateConfig arch', () => {
	const componentName = 'template';
	const configName = `${componentName}.config`;

	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should generate tempalte config', () => {
		const expected = {
			fileName: configName,
			template: mockTemplateConfg,
			templateTest: mockConfigTestTemplate,
		};

		const result = createConfigTemplate(componentName);
		expect(result).toStrictEqual(expected);
	});
});
