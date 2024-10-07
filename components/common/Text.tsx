export type TextProps = {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return (
    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-12">{children}</p>
  )
}

