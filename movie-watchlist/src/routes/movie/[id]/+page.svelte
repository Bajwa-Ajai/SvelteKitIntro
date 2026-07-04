<script>
  let { data } = $props()
  let { movie } = data
</script>

<a href="/">← Back to Watchlist</a>

<div class="detail">
  <h1>{movie.title}</h1>
  <p><strong>Genre:</strong> {movie.genre}</p>
  <p><strong>Year:</strong> {movie.year}</p>
  <p><strong>Status:</strong> {movie.watched ? "✅ Watched" : "⏳ Not watched yet"}</p>
</div>

<style>
  a {
    color: #555;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .detail {
    margin-top: 1.5rem;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 400px;
  }

  .detail h1 {
    margin-top: 0;
  }
</style>