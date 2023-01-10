export default `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { TemplateModel } from './template.model.ts';

describe('#TemplateModel', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;
