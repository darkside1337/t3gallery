import Image, { getImageProps } from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  getImageProps;
  return (
    <div className="flex h-full w-full min-w-0 bg-green-500">
      <div className="flex-shrink">
        {/* eslint-disable-next-lin */}
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
