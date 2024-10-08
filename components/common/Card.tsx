import { ReactNode } from 'react';
import { Card as UiCard, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export type CardProps = {
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
  return (
    <UiCard className="flex flex-col items-center text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </UiCard>
  );
}
