<template>
  <main>
    <SaveOurDate />
    <CountdownTimer />
    <HomeInfoBox />
    <Timeline />
  </main>
</template>

<script lang="ts">
import SaveOurDate from "@/components/home/SaveOurDate.vue";
import CountdownTimer from "@/components/home/CountdownTimer.vue";
import HomeInfoBox from "@/components/home/HomeInfoBox.vue";
import Timeline from "@/components/home/Timeline.vue";

export default {
  name: 'Home',
  components: {
    SaveOurDate,
    CountdownTimer,
    HomeInfoBox,
    Timeline
  }
};
</script>

<style lang="scss" scoped>

</style>