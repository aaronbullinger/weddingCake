<template>
  <main class="checkerboard-blue">
    <InfoBox />
    <LocationInfo />
    <Checkerboard />  
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/location/InfoBox.vue';
import LocationInfo from '@/components/location/LocationInfo.vue';
import Checkerboard from '../components/Checkerboard.vue';

export default {
  name: 'Location',
  components: {
    InfoBox,
    LocationInfo,
    Checkerboard
  }
};
</script>

<style lang="scss" scoped>
.checkerboard-blue {
  --cb-above-1: transparent;
  --cb-above-2: #{$espresso-color};
  --cb-above-3: transparent;
  --cb-above-4: #{$espresso-color};

  --cb-below-1: #{$espresso-color};
  --cb-below-2: transparent;
  --cb-below-3: #{$espresso-color};
  --cb-below-4: transparent;
}
</style>