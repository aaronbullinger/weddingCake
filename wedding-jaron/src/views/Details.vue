<template>
  <main>
    <InfoBox />
    <Trauzeugen />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/details/InfoBox.vue'
import Trauzeugen from '@/components/details/Trauzeugen.vue'

export default {
  name: 'Details',
  components: {
    InfoBox,
    Trauzeugen
  }
};
</script>

<style lang="scss" scoped>

</style>