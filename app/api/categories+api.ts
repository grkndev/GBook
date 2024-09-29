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
        img: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        slug: "slug2",
        title: "title2",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        slug: "slug3",
        title: "title3",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        slug: "slug4",
        title: "title4",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        slug: "slug5",
        title: "title5",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        slug: "slug6",
        title: "title6",
        img: "https://via.placeholder.com/150",
      },
    ],
  });
}
