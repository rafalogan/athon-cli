import { config } from 'process';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['src/index.ts'],
	},
});
