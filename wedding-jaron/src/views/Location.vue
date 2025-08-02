<template>
  <main>
    <InfoBox />
    <LocationInfo />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/location/InfoBox.vue';
import LocationInfo from '@/components/location/LocationInfo.vue';

export default {
  name: 'Location',
  components: {
    InfoBox,
    LocationInfo
  }
};
</script>

<style lang="scss" scoped>
</style>