export default `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { TemplateService } from './template.service.ts';

describe('#TemplateService', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;
