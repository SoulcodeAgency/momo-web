import React from 'react';

export type ListProps = {
  children: React.ReactNode;
};

export default function List({ children }: ListProps) {
  return <ul className="mt-4 space-y-2 justify-start text-left">{children}</ul>;
}
