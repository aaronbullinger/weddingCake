<template>
  <main>
    <SaveOurDate />
    <CountdownTimer />
    <HomeInfoBox />
    <Timeline />
    <OurStory />
  </main>
</template>

<script lang="ts">
import SaveOurDate from "@/components/home/SaveOurDate.vue";
import CountdownTimer from "@/components/home/CountdownTimer.vue";
import HomeInfoBox from "@/components/home/HomeInfoBox.vue";
import Timeline from "@/components/home/Timeline.vue";
import OurStory from "@/components/home/OurStory.vue";

export default {
  name: 'Home',
  components: {
    SaveOurDate,
    CountdownTimer,
    HomeInfoBox,
    Timeline,
    OurStory
  }
};
</script>

<style lang="scss" scoped>

</style>