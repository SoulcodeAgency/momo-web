import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = {
  children: ReactNode;
  containerVariant?: "black" | "white" | "gray";
  className?: string;
};

export default function Container({ children, className, containerVariant }: ContainerProps) {
  // Default container styles
  className = cn(className, "w-full py-12 md:py-24 lg:py-32");

  // Container variant styles
  switch (containerVariant) {
    case "black":
      className = cn(className, "bg-black text-white");
      break;
    case "gray":
      className = cn(className, "bg-gray-100 text-black");
      break;
    case "white":
    default:
      className = cn(className, "bg-white text-black");
      break;
  }
  return (
    <div className={cn(className)}>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        {children}
      </div>
    </div>
  )
};
