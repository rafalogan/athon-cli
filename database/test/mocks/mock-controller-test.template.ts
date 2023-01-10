export default `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { TemplateController } from './template.controller.ts';

describe('#TemplateController', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;
