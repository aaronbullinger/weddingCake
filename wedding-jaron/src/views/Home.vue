<template>
  <main>
    <SaveOurDate></SaveOurDate>
    <CountdownTimer></CountdownTimer>
    <HomeInfoBox></HomeInfoBox>
  </main>
</template>

<script lang="ts">
import SaveOurDate from "@/components/SaveOurDate.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";
import HomeInfoBox from "@/components/HomeInfoBox.vue";

export default {
  name: 'Home',
  components: { SaveOurDate, CountdownTimer, HomeInfoBox }
};
</script>

<style lang="scss" scoped>

</style>