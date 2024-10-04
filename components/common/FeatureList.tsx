import React from "react";

export type FeatureListProps = {
  children: React.ReactNode;
}

export default function FeatureList({ children }: FeatureListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {children}
    </ul>
  );
};