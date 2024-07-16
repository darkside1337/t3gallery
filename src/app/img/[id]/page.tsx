import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <div className="flex h-full w-full grow items-center justify-center">
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}
