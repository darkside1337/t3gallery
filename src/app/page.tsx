import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="flex w-48 flex-col gap-2">
            <Image src={image.url} alt={image.name} width={192} height={192} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      hello gallery in progress
    </main>
  );
}
