import { DefaultNotImplementedComponent } from "@uniformdev/canvas-next-rsc/component"; // Default Fallback component for missing components
import { NotImplementedComponent } from "./NotImplementedComponent"; // Custom Fallback component for missing components
import { ComponentInstance } from '@uniformdev/canvas';
import path from 'path';
import fs from 'fs';

/**
 * Configuration
 */
const UNIFORM_COMPOSITION_NAME_CAMEL_CASE = true;              // Define if the first character of the uniform composition name is lowercase. True = "listItem", False = "ListItem"
const UNIFORM_COMPONENT_FILE_NAME_PREFIX = "Canvas";           // Define a regex to replace the uniform component name. The prefix is used in the component file name and export, but not within Uniform. E.g. "CanvasListItem" -> "ListItem"
const UNIFORM_COMPONENTS_DIR = 'integrations/uniform/canvas';  // From project root (process.cwd())
const UNIFORM_COMPONENTS_DIR_ABSOLUTE_PATH = path.join(process.cwd(), UNIFORM_COMPONENTS_DIR);
const UNIFORM_COMPONENTS_DIR_RELATIVE = './canvas';            // Configure the path from this file to the components directory

/**
 * Resolver code
 */

// Holds the mapping of component names to their respective components
const componentsMap: { [key: string]: React.ComponentType<any> } = {};

// Function to initialize the component mappings automatically
export async function initializeComponentsMap() {
  const files = fs.readdirSync(UNIFORM_COMPONENTS_DIR_ABSOLUTE_PATH);
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const componentName = file.replace('.tsx', '');
      componentsMap[getCompositionPublicId(componentName)] = await importComponent(componentName);
    }
  }
  // console.log("🤩 Resolved compositions to React Components:", componentsMap)
}

// Function to dynamically import components
async function importComponent(componentName: string) {
  try {
    const module = require(`${UNIFORM_COMPONENTS_DIR_RELATIVE}/${componentName}`);
    if (module[componentName]) {
      // console.log("✔️ Imported component:", componentName);
      return module[componentName];
    }

    if (module.default) {
      console.warn(`⚠️ Missing correct named export for component "${componentName}". Fallback to default export`);
      return module.default;
    }
    
    if (module) {
      throw new Error(`❌ Neither named nor default export found for component "${componentName}". This component will not work!`);
    }

    throw new Error(`❌ Component "${componentName}" not found!`);
  } catch (error) {
    console.error(error);
    return NotImplementedComponent;
  }
}

/**
 * Extracts and returns the public id of a composition by converting the first character
 * to lowercase and removing a prefix if configured.
 *
 * @param componentName - The name of the component.
 * @returns The public id of the composition - if required with the first character in lowercase and the prefix removed.
 */
export function getCompositionPublicId(componentName: string): string {
  if (UNIFORM_COMPONENT_FILE_NAME_PREFIX) {
    componentName = componentName.replace(new RegExp(`^${UNIFORM_COMPONENT_FILE_NAME_PREFIX}`, 'i'), '')
  }
  if (UNIFORM_COMPOSITION_NAME_CAMEL_CASE) {
    componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
  }
  return componentName;
}

/**
 * Extracts and returns the name of a component by converting the first character
 * to uppercase and adding a prefix if configured.
 *
 * @param compositionPublicId - The public id of the composition.
 * @returns The name of the component - if required with the first character in uppercase and the prefix added.
 */
export function getComponentName(compositionPublicId: string): string {
  if (UNIFORM_COMPOSITION_NAME_CAMEL_CASE) {
    compositionPublicId = compositionPublicId.charAt(0).toUpperCase() + compositionPublicId.slice(1);
  }
  if (UNIFORM_COMPONENT_FILE_NAME_PREFIX) {
    compositionPublicId = UNIFORM_COMPONENT_FILE_NAME_PREFIX + compositionPublicId;
  }
  return compositionPublicId;
}

// Resolve the component dynamically
export function resolveComponent({ component }: { component: ComponentInstance }) {
  const componentType = componentsMap[component.type] || NotImplementedComponent || DefaultNotImplementedComponent;

  return {
    component: componentType,
  };
}