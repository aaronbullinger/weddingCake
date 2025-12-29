<template>
  <main>
    <Content/>
    <Checkerboard/> 
  </main>
</template>

<script lang="ts">
import Content from "@/components/datenschutz/Content.vue";
import Checkerboard from "../components/Checkerboard.vue";


export default {
  name: 'Datenschutz',
  components: {
    Content,
    Checkerboard
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  overflow-x: hidden; // Prevent horizontal scrolling

  // Mobile spacing adjustments
  @media (max-width: 768px) {
    padding: 0;
  }
}

.checkerboard {
  margin-top: 5rem;
}
</style>
