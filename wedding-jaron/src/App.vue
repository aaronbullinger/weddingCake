<template>
  <div id="app">
    <header class="navbar">
      <!-- Logo -->
      <div class="homebutton">
        <span class="homebutton">JaAron</span>
      </div>

      <!-- Navigation -->
      <nav class="nav-links">
        <RouterLink to="/rueckmeldung">Rückmeldung</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
        <RouterLink to="/unterkunft">Unterkunft</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
      </nav>
    </header>

    <!-- Hier werden die Unterseiten geladen -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Einfaches Styling */
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5vw;
  background: #fff;
  z-index: 1000;
}

.homebutton {
  color: #3B5D47;
  font-size: 50px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 30px;
  padding-right: 15%;
  font-size: 25px;
  color: #707070;
  text-decoration: none;
}

@media(max-width: 600px) {
  .navbar {
    flex-direction: row;
    align-items: center;
  }
  .nav-links {
    flex-direction: row;
    gap: 30px;
    padding-right: 15%;
  }
}

.nav-links a {
  color: #707070;
  text-decoration: none;
}

.nav-links a .router-link-active {
  font-weight: bold;
  color: black;
}
</style>
