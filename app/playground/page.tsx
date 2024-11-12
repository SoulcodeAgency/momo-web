import { resolveComponent } from '@/integrations/uniform/UniformComponentResolver';
import { UniformPlayground, UniformPlaygroundProps } from '@uniformdev/canvas-next-rsc';
import { type AsyncProps, extractProps } from '@/lib/nextjs/typeHelpers';

export const dynamic = 'force-static';

export default async function PlaygroundPage(asyncProps: AsyncProps<Omit<UniformPlaygroundProps, 'resolveComponent'>>) {
  const props = await extractProps(asyncProps);
  return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}
