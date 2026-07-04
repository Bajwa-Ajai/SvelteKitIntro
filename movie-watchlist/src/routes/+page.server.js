import { movies, addMovie, toggleWatched } from "$lib/data.js";

export function load() {
  return { movies };
}

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    addMovie(data.get("title"), data.get("genre"), data.get("year"));
  },

  toggle: async ({ request }) => {
    const data = await request.formData();
    toggleWatched(data.get("id"));
  },
};
