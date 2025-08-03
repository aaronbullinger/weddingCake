<template>
  <header class="navbar">
    <div class="navbar-content">
      <!-- Logo -->
      <div class="homebutton">
        <RouterLink to="/home">JaAron</RouterLink>
      </div>

      <!-- Navigation -->
      <nav class="nav-links">
        <RouterLink to="/rueckmeldung">Rückmeldung</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
        <RouterLink to="/unterkunft">Unterkunft</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/photoGallery">Photo</RouterLink>
      </nav>
    </div>
  </header>
</template>


<script setup lang="ts">

</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-content {
  max-width: 75vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  box-sizing: border-box;
}

.homebutton {
  font-size: 2.5rem;
  font-weight: bold;
  color: $waldgruen-color;
  display: flex;
  align-items: center;
}

.homebutton a {
  text-decoration: none;
  color: inherit;
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
  color: $salbei-color;
}

.nav-links a {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  padding: 0 0.5rem;
}

.nav-links .router-link-active {
  color: $waldgruen-color;
  font-weight: bold;
}
</style>