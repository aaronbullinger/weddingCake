<template>
  <main>
    <SaveOurDate></SaveOurDate>
    <CountdownTimer></CountdownTimer>
    <HomeInfoBox></HomeInfoBox>
  </main>
</template>

<script lang="ts">
import SaveOurDate from "@/components/home/SaveOurDate.vue";
import CountdownTimer from "@/components/home/CountdownTimer.vue";
import HomeInfoBox from "@/components/home/HomeInfoBox.vue";

export default {
  name: 'Home',
  components: { SaveOurDate, CountdownTimer, HomeInfoBox }
};
</script>

<style lang="scss" scoped>

</style>