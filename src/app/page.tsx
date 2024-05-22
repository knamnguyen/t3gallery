import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://pgufwtpsfcdjcqvmykqh.supabase.co/storage/v1/object/sign/images/1b752e69-f6f8-4b4e-b50a-fa36f1c074c6.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvMWI3NTJlNjktZjZmOC00YjRlLWI1MGEtZmEzNmYxYzA3NGM2LmpwZWciLCJpYXQiOjE3MTYyMDgyMTQsImV4cCI6MTc0Nzc0NDIxNH0.oMSeAGiASOAnPGXwTXaqJs6AiP4DAM6exVkLTMOmjKo&t=2024-05-20T12%3A30%3A14.237Z",
  "https://pgufwtpsfcdjcqvmykqh.supabase.co/storage/v1/object/sign/images/56dfc33b-f9e5-460a-a56c-fbbdb4c2fd7c.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvNTZkZmMzM2ItZjllNS00NjBhLWE1NmMtZmJiZGI0YzJmZDdjLmpwZWciLCJpYXQiOjE3MTYyMDgyNDUsImV4cCI6MTc0Nzc0NDI0NX0.r27L9dGqyoHQpPESytbUxRNuw56b_qHUzMzqGthvBUI&t=2024-05-20T12%3A30%3A45.571Z",
  "https://pgufwtpsfcdjcqvmykqh.supabase.co/storage/v1/object/sign/images/5d49a714-390b-437f-8d31-d1f5d3325095.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvNWQ0OWE3MTQtMzkwYi00MzdmLThkMzEtZDFmNWQzMzI1MDk1LmpwZWciLCJpYXQiOjE3MTYyMDgyNjYsImV4cCI6MTc0Nzc0NDI2Nn0.VXPx4BANHzQEUxzOMqFToFG_TVWzzeDCOMhgzRORntM&t=2024-05-20T12%3A31%3A06.194Z",
  "https://pgufwtpsfcdjcqvmykqh.supabase.co/storage/v1/object/sign/images/5d49a714-390b-437f-8d31-d1f5d3325095.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvNWQ0OWE3MTQtMzkwYi00MzdmLThkMzEtZDFmNWQzMzI1MDk1LmpwZWciLCJpYXQiOjE3MTYyMDgyNjYsImV4cCI6MTc0Nzc0NDI2Nn0.VXPx4BANHzQEUxzOMqFToFG_TVWzzeDCOMhgzRORntM&t=2024-05-20T12%3A31%3A06.194Z",
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
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
