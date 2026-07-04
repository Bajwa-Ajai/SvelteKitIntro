import { getMovie } from "$lib/data.js";

export function load({ params }) {
  const movie = getMovie(params.id);
  return { movie };
}
