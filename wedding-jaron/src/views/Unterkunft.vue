<template>
  <main>
    <InfoBox />
    <Unterkuenfte />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/unterkunft/InfoBox.vue';
import Unterkuenfte from '../components/unterkunft/Unterkuenfte.vue';

export default {
  name: 'Unterkunft',
  components: {
    InfoBox,
    Unterkuenfte
  }
};
</script>

<style lang="scss" scoped>

</style>