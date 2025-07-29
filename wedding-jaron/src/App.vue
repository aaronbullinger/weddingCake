<template>
  <div id="app">

    <NavBar></NavBar>
    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {NavBar}
};
</script>

<style>
#app {
  padding: 0.5rem 2rem 0.5rem 2rem;
}

div {
  margin: 0.5rem;
}
</style>
