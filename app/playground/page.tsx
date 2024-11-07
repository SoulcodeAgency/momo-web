import { resolveComponent } from '@/integrations/uniform/UniformComponentResolver';
import { UniformPlayground, UniformPlaygroundProps } from '@uniformdev/canvas-next-rsc';
import { type AsyncProps, extractProps } from '@/lib/typeHelpers';

export default async function PlaygroundPage(asyncProps: AsyncProps<UniformPlaygroundProps>) {
  const props = await extractProps(asyncProps);
  return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}
