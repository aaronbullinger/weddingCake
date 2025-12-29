<template>
  <div class="checkerboard-impressionen">
    <div class="checkerboard-impressionen-above"></div>
    <div class="checkerboard-impressionen-below"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Impressionen',
};
</script>

<style scoped lang="scss">

.checkerboard-impressionen {
  width: 100vw;
  margin-bottom: -80px;
}

/* gemeinsame Basis */
.checkerboard-impressionen-above,
.checkerboard-impressionen-below {
  width: 100%;
  height: 8vw;

  background-size: 32vw 8vw;
  background-repeat: repeat-x;
}

.checkerboard-impressionen-above {
  background:
    var(--cb-above-1, #4f634f),
    url('.../assets/Rectangle2.png'),
    url('.../assets/Rectangle4.png'),
    var(--cb-above-2, #8fa6b6);

  background-size: cover, cover, cover, cover;
  background-position: center;
  background-repeat: no-repeat;

  /* MASKE */
  -webkit-mask-image: linear-gradient(
  90deg,
  black 0%, black 14.2857%,
  transparent 14.2857%, transparent 28.5714%,
  black 28.5714%, black 42.8571%,
  transparent 42.8571%, transparent 57.1428%,
  black 57.1428%, black 100%
);
  mask-image: linear-gradient(
  90deg,
  black 0%, black 14.2857%,
  transparent 14.2857%, transparent 28.5714%,
  black 28.5714%, black 42.8571%,
  transparent 42.8571%, transparent 57.1428%,
  black 57.1428%, black 100%
);

  -webkit-mask-size: 56vw 100%;
  mask-size: 56vw 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.checkerboard-impressionen-below {
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0 8vw,
    black 8vw 16vw,
    transparent 16vw 24vw,
    black 24vw 32vw,
    transparent 32vw 40vw,
    black 40vw 48vw,
    transparent 48vw 56vw
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0 8vw,
    black 8vw 16vw,
    transparent 16vw 24vw,
    black 24vw 32vw,
    transparent 32vw 40vw,
    black 40vw 48vw,
    transparent 48vw 56vw
  );
  
  -webkit-mask-size: 56vw 100%;
  mask-size: 56vw 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>