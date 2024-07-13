import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/aff0c210-ee08-430f-831b-9eed01d00a9c-lcm5kk.svg",
  "https://utfs.io/f/8a10868e-90a8-4fa2-ba0e-601b0c3ed447-kl4egl.svg",
  "https://utfs.io/f/d7fa2c91-b1b9-4159-9a34-4fc7232b7326-j3g8bl.svg",
  "https://utfs.io/f/8326b611-8bba-4bd9-a4fd-443da1ce8f30-l7xosj.svg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((p) => (
          <div key={p.name}>{p.name}</div>
        ))}
        {/*  {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))} */}
      </div>
      hello gallery in progress
    </main>
  );
}
