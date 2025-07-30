<template>
  <header class="navbar">
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
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  z-index: 1000;
  padding-bottom: 10px;
  width: 100vw;
}

.homebutton {
  color: $waldgruen-color;
  font-size: 40px;
  font-weight: bold;
  padding-left: 5%;
}

.homebutton a {
  text-decoration: none;
  color: inherit;
}

.nav-links {
  display: flex;
  gap: 40px;
  padding-right: 15%;
  padding-top: 10px;
  font-size: 18px;
  color: $gravelgrau-color;
  text-decoration: none;
}

.nav-links a {
  color: $gravelgrau-color;
  text-decoration: none;
}

.nav-links .router-link-active {
  color: $waldgruen-color;
  font-weight: bold;
}
</style>