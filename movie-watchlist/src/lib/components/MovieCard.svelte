<script>
  let { movie } = $props()
</script>

<div class="card" class:watched={movie.watched}>
  <div class="info">
    <a href="/movie/{movie.id}">
      <h2>{movie.title}</h2>
    </a>
    <p>{movie.genre} · {movie.year}</p>
    <span class="badge">{movie.watched ? "✅ Watched" : "⏳ Unwatched"}</span>
  </div>

  <form method="POST" action="?/toggle">
    <input type="hidden" name="id" value={movie.id} />
    <button type="submit">
      {movie.watched ? "Mark Unwatched" : "Mark Watched"}
    </button>
  </form>
</div>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .card.watched {
    opacity: 0.6;
  }

  .card h2 {
    margin: 0;
  }

  .card a {
    text-decoration: none;
    color: inherit;
  }

  .card a:hover h2 {
    text-decoration: underline;
  }

  .badge {
    font-size: 0.85rem;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>