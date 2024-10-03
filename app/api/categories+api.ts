export function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const categoryName = searchParams.get("categoryName");
  return Response.json({
    categoryName,
    data: [
      {
        id: 1,
        slug: "slug1",
        title: "title1",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 2,
        slug: "slug2",
        title: "title2",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 3,
        slug: "slug3",
        title: "title3",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 4,
        slug: "slug4",
        title: "title4",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 5,
        slug: "slug5",
        title: "title5",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 6,
        slug: "slug6",
        title: "title6",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 7,
        slug: "slug7",
        title: "title7",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 8,
        slug: "slug8",
        title: "title8",
        img: "https://placehold.jp/150x150.png",
      },
      {
        id: 9,
        slug: "slug9",
        title: "title9",
        img: "https://placehold.jp/150x150.png",
      },
    ],
  });
}
