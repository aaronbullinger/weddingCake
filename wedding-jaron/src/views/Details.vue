<template>
  <main>
    <InfoBox />
    <Trauzeugen />
    <Checkerboard />
    <Dresscode />
    <Programm />
    <Checkerboard />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/details/InfoBox.vue';
import Trauzeugen from '@/components/details/Trauzeugen.vue';
import Checkerboard from '../components/Checkerboard.vue';
import Dresscode from '../components/details/Dresscode.vue';
import Programm from '../components/details/Programm.vue';

export default {
  name: 'Details',
  components: {
    InfoBox,
    Trauzeugen,
    Checkerboard,
    Dresscode,
    Programm
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