import { ReactNode } from 'react';
import { Card as UiCard, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <UiCard className="flex flex-col items-center text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </UiCard>
  )
}

