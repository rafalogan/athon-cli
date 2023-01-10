import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockConfigTestTemplate from '../../../database/test/mocks/mock-config-test.template';
import mockControllerTestTemplate from '../../../database/test/mocks/mock-controller-test.template';
import mockControllerTemplate from '../../../database/test/mocks/mock-controller.template';
import mockServiceTestTemplate from '../../../database/test/mocks/mock-service-test.template';
import mockServiceTemplate from '../../../database/test/mocks/mock-service.template';
import mockTemplateConfg from '../../../database/test/mocks/mock-template.confg';

import { createConfigTemplate, createControllerTemplate, createServiceTemplate } from './simple.template';

describe('#TmplateConfig arch', () => {
	const componentName = 'template';

	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should generate tempalte config', () => {
		const fileName = `${componentName}.config`;
		const expected = {
			fileName,
			template: mockTemplateConfg,
			templateTest: mockConfigTestTemplate,
		};

		const result = createConfigTemplate(componentName);
		expect(result).toStrictEqual(expected);
	});

	test('#Should generate tempalte service', () => {
		const fileName = `${componentName}.service`;
		const expected = { fileName, template: mockServiceTemplate, templateTest: mockServiceTestTemplate };
		const result = createServiceTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});

	test('#Should generate tempalte controller', () => {
		const fileName = `${componentName}.controller`;
		const expected = { fileName, template: mockControllerTemplate, templateTest: mockControllerTestTemplate };
		const result = createControllerTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});
});
