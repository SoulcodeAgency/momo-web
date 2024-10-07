import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type FlexWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function FlexWrapper({ children, className }: FlexWrapperProps) {
  // Default container styles
  className = cn(className, "w-full flex justify-center gap-12");

  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
};
