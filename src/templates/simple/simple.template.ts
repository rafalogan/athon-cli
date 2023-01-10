import { makeSimpleTemplate } from '../share';

export const createConfigTemplate = (componentName: string, type = 'ts') =>
	makeSimpleTemplate(componentName, 'config', type);

export const createServiceTemplate = (componentName: string, type = 'ts') =>
	makeSimpleTemplate(componentName, 'service', type);

export const createControllerTemplate = (componentName: string, type = 'ts') =>
	makeSimpleTemplate(componentName, 'controller', type);
