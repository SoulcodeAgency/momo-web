import { CanvasProps } from '../typeHelpers';
import Image, { type ImageProps } from '@/components/common/Image';
import { getMediaUrl } from '../utilities';
import type { Asset } from '@uniformdev/assets';

type Parameters = { image: string | { path?: string } | Asset };
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames, ImageProps>;

export function CanvasImage({ image, height, width }: Props) {
  const imageUrl = getMediaUrl(image);
  return <Image src={imageUrl} width={width} height={height} />;
}
