<template>
  <div id="app">
    <header>
      <h1>Willkommen auf unserer Hochzeits Homepage</h1>
    </header>
    <main>
      <p>Hier entsteht Liebe!</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 24px;
  padding: 0 8px;
}

header h1 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

main p {
  font-size: 1rem;
}

/* Ab 600px: größere Schrift und mehr Abstand */
@media (min-width: 600px) {
  #app {
    margin-top: 50px;
    padding: 0 24px;
  }
  header h1 {
    font-size: 2.5rem;
  }
  main p {
    font-size: 1.25rem;
  }
}
</style>