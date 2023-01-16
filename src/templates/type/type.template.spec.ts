import { expect, describe, test, vitest, beforeEach } from 'vitest';

import mockInterfaceTestTemplate from '../../../database/test/mocks/mock-interface-test.template';
import { createInterfaceTemplate } from './type.template';

describe('#Interface template', () => {
	const componentName = 'template';

	beforeEach(() => {
		vitest.resetAllMocks();
		vitest.clearAllMocks();
	});

	test('#Should to generate a Interface template', () => {
		const expected = { fileName: componentName, template: mockInterfaceTestTemplate };
		const result = createInterfaceTemplate(componentName);

		expect(result).toStrictEqual(expected);
	});
});
