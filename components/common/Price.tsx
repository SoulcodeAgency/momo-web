import { ReactNode } from 'react';

export type PriceProps = {
  price: string | ReactNode;
  description?: string | ReactNode;
  currency?: string | ReactNode;
};

export default function Card({ price, description, currency }: PriceProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold">
        {price} {currency}
      </p>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
}
