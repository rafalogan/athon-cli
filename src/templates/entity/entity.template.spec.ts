import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockEntityTemplate from '../../../database/test/mocks/mock-entity.template';
import { createEntityTemplate } from './entiy.template';

describe('#EntityTemplate', () => {
	const componentName = 'test';
	const fileName = `${componentName}.entity`;

	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should generate entity template', () => {
		const expected = { fileName, template: mockEntityTemplate };
		const result = createEntityTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});
});
