import Image from "next/image";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);

  return <Image src={image.url} alt={image.name} width={500} height={500} />;
}
