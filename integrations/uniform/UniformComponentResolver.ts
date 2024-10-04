import { DefaultNotImplementedComponent } from "@uniformdev/canvas-next-rsc/component";
import { ComponentInstance } from '@uniformdev/canvas';
import path from 'path';
import fs from 'fs';

// Configure the path from this file to the components directory to import
const UNIFORM_COMPONENTS_DIR = 'integrations/uniform/canvas';  // From project root (process.cwd())
const UNIFORM_COMPONENTS_DIR_RELATIVE = './canvas';            // From this resolver file
const UNIFORM_COMPONENT_NAME_REPLACE_REGEX = /^canvas/i;       // Define a regex to replace the uniform component name
const UNIFORM_COMPONENT_NAME_TO_LOWER = true;                  // Define if the uniform component name should be converted to lowercase

// Holds the mapping of component names to their respective components
const componentsMap: { [key: string]: React.ComponentType<any> } = {};

// Function to dynamically import components
async function importComponent(componentName: string) {
  // console.log("?? Soulcode: Importing component:", componentName);
  try {
    const module = await import(`${UNIFORM_COMPONENTS_DIR_RELATIVE}/${componentName}`);
    return module.default || module[componentName] || module;
  } catch (error) {
    console.error(`?? Error importing component ${componentName}:`, error);
    return DefaultNotImplementedComponent;
  }
}

// Function to initialize the components map
export async function initializeComponentsMap() {
  const componentsDir = path.join(process.cwd(), UNIFORM_COMPONENTS_DIR);
  const files = fs.readdirSync(componentsDir);
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const componentName = file.replace('.tsx', '');
      componentsMap[getUniformComponentName(componentName)] = await importComponent(componentName);
    }
  }
  // console.log("?? Soulcode: Resolved components", componentsMap)
}

/**
 * Extracts and returns the name of a component by removing the 'canvas' prefix
 * and converting the remaining string to lowercase.
 *
 * @param componentName - The component name.
 * @returns The name of the component in lowercase, with the 'canvas' prefix removed.
 */
export function getUniformComponentName(componentName: string): string {
  if (UNIFORM_COMPONENT_NAME_REPLACE_REGEX) {
    componentName = componentName.replace(UNIFORM_COMPONENT_NAME_REPLACE_REGEX, '')
  }
  if (UNIFORM_COMPONENT_NAME_TO_LOWER) {
    componentName = componentName.toLowerCase();
  }
  return componentName;
}

// Resolve the component dynamically
export function resolveComponent({ component }: { component: ComponentInstance }) {
  const componentType = componentsMap[component.type] || DefaultNotImplementedComponent;

  return {
    component: componentType,
  };
}