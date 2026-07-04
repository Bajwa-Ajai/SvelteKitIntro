<script>
  import MovieCard from "$lib/components/MovieCard.svelte"

  let { data } = $props()
    console.log("data:", data)
  console.log("movies:", data.movies)

  let filter = $state("all")

  let filtered = $derived(
    filter === "all"
      ? data.movies
      : filter === "watched"
      ? data.movies.filter(m => m.watched)
      : data.movies.filter(m => !m.watched)
  )
</script>

<h1>My Watchlist ({data.movies.length} movies)</h1>

<div class="filters">
  <button onclick={() => filter = "all"}>All</button>
  <button onclick={() => filter = "watched"}>Watched</button>
  <button onclick={() => filter = "unwatched"}>Unwatched</button>
</div>

{#each filtered as movie}
  <MovieCard {movie} />
{/each}

{#if filtered.length === 0}
  <p>No movies found.</p>
{/if}

<h2>Add a Movie</h2>
<form method="POST" action="?/add">
  <input name="title" placeholder="Title" required />
  <input name="genre" placeholder="Genre" required />
  <input name="year" placeholder="Year" type="number" required />
  <button type="submit">Add Movie</button>
</form>

<style>
  .filters {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 400px;
    margin-top: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>