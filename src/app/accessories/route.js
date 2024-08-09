import { accessories } from "./data";

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (id === null) {
    return Response.json(accessories);
  }
  return Response.json(accessories.filter((acc) => acc.id === parseInt(id)));
}
