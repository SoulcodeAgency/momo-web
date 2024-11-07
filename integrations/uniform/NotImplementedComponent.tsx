import { ComponentInstance } from '@uniformdev/canvas';
import { getComponentName } from './UniformComponentResolver';
import { JSX } from 'react';

export function NotImplementedComponent({ component }: { component: ComponentInstance }): JSX.Element {
  const componentName = getComponentName(component.type);
  const errorMessage = `⚠️ The component of type "${component.type}" could not be loaded.`;
  console.error(errorMessage, 'Expected named export / component file name:', componentName);
  return (
    <div>
      {errorMessage} (<i>{componentName}</i>)
    </div>
  );
}
