<template>
  <div class="checkerboard">
    <div class="checkerboard-above"></div>
    <div class="checkerboard-below"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Checkerboard',
};
</script>

<style scoped lang="scss">

.checkerboard {
  width: 100vw;
  margin-bottom: -80px;
}

/* gemeinsame Basis */
.checkerboard-above,
.checkerboard-below {
  width: 100%;
  height: 8vw;

  background-size: 32vw 8vw;
  background-repeat: repeat-x;
}

/* Checkerboard.vue */
.checkerboard-above {
  background-image: linear-gradient(
    90deg,
    var(--cb-above-1, transparent) 0 8vw,
    var(--cb-above-2, #4f634f) 8vw 16vw,
    var(--cb-above-3, transparent) 16vw 24vw,
    var(--cb-above-4, #8fa6b6) 24vw 32vw
  );
}

.checkerboard-below {
  background-image: linear-gradient(
    90deg,
    var(--cb-below-1, #4a372b) 0 8vw,
    var(--cb-below-2, transparent) 8vw 16vw,
    var(--cb-below-3, #c7dcc9) 16vw 24vw,
    var(--cb-below-4, transparent) 24vw 32vw
  );
}
</style>