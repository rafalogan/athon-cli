import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockEntityTestTemplate from '../../../database/test/mocks/mock-entity-test.template';
import mockEntityTemplate from '../../../database/test/mocks/mock-entity.template';
import { createEntityTemplate } from './entity.template';

describe('#EntityTemplate', () => {
	const componentName = 'entidade';
	const fileName = `${componentName}.entity`;

	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should generate entity template', () => {
		const expected = { fileName, template: mockEntityTemplate, templateTest: mockEntityTestTemplate };
		const result = createEntityTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});
});
