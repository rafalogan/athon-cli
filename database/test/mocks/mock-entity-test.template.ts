export default `import { expect, describe, test, vitest, beforeEach } from 'vitest';

import { Entidade } from './entidade.entity.ts';

describe('#Entity Entidade', () => {
	beforeEach(() => {
		vitest.restoreAllMocks();
		vitest.clearAllMocks();
	});
});`;
