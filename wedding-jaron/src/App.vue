<template>
    <NavBar></NavBar>
    <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {NavBar}
};
</script>

<style  lang="scss" >
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
}
</style>
