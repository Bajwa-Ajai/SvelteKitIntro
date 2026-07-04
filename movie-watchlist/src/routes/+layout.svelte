<script>
  let { children } = $props()
</script>

<nav>
  <a href="/">🎬 My Watchlist</a>
</nav>

<main>
  {@render children()}
</main>

<style>
  nav {
    background: #1a1a2e;
    padding: 1rem 2rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
  }

  main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
</style>