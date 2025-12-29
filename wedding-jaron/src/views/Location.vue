<template>
  <main>
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
</style>