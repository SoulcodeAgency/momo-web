import { CanvasProps, LinkType } from '../typeHelpers';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import Link from 'next/link';
import { ReactNode } from 'react';

type Parameters = {
  link: LinkType;
  text?: string;
  hoverEffect?: 'none' | 'underline' | 'scale';
};
type SlotNames = 'content';
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasLink({ component, context, text, link, hoverEffect, slots }: Props) {
  let url = link?.path;
  if (link?.type === 'email') url = `mailto:${url}`;
  if (link?.type === 'tel') url = `tel:${url}`;

  let content: ReactNode = text ? text : null;
  content = slots.content ? <UniformSlot context={context} data={component} slot={slots.content} /> : null;

  let className = '';
  if (hoverEffect === 'underline') {
    className = 'hover:underline';
  } else if (hoverEffect === 'scale') {
    className = '[&>*]:transition-all [&:hover>*]:scale-105 [&:hover>*]:bg-slate-100';
  }

  return (
    <Link href={url} className={className}>
      {content}
    </Link>
  );
}
