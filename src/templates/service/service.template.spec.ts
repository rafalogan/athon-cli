import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockServiceTemplate from '../../../database/test/mocks/mock-service.template';
import { createServiceTemplate } from './service.template';

describe('#ServiceTemplates', () => {
	const componentName = 'teste';
	const fileName = `${componentName}.service`;

	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should create new ServiceTemplate', () => {
		const expected = { fileName, template: mockServiceTemplate };
		const result = createServiceTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});
});
