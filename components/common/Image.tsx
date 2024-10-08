import NextImage from 'next/image';

export type ImageProps = {
  src?: string;
  width?: number;
  height?: number;
};

export default function Image({ src = "/placeholder.svg", width = 1920, height = 1080 }: ImageProps) {
  if (!src) src = "/placeholder.svg";
  return (
    <NextImage
      src={src}
      alt="Image"
      width={width}
      height={height}
      className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    />
  );
}
