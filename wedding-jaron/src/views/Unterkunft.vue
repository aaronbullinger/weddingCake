<template>
  <main class="checkerboard-blue">
    <InfoBox />
    <Unterkuenfte />
    <Checkerboard />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/unterkunft/InfoBox.vue';
import Unterkuenfte from '../components/unterkunft/Unterkuenfte.vue';
import Checkerboard from '../components/Checkerboard.vue';

export default {
  name: 'Unterkunft',
  components: {
    InfoBox,
    Unterkuenfte,
    Checkerboard
  }
};
</script>

<style lang="scss" scoped>
.checkerboard-blue {
  --cb-above-1: transparent;
  --cb-above-2: #8fa6b6;
  --cb-above-3: transparent;
  --cb-above-4: #8fa6b6;

  --cb-below-1: #8fa6b6;
  --cb-below-2: transparent;
  --cb-below-3: #8fa6b6;
  --cb-below-4: transparent;
}
</style>