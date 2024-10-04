export type TextProps = {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return (
    <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl my-4">{children}</p>
  )
}

