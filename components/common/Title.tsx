export type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{children}</h2>;
}
