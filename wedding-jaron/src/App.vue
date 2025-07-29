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

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  margin-top: 80px;
  padding: 0px 50px 0 50px;
}
</style>
