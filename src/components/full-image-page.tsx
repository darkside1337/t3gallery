import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);

  const uploadedInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink">
        {/* eslint-disable-next-line */}
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          Uploaded By:<span>{uploadedInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          Created On:<span>{image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
