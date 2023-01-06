export default `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { TemplateConfig } from './template.config.spec.ts';

describe('#TemplateConfig', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;
