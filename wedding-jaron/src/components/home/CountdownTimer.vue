<template>
  <div class="countdown-timer">
    <div class="time-box">
      <span>{{ days }}</span>
      <small>Tage</small>
    </div>
    <div class="time-box">
      <span>{{ hours }}</span>
      <small>Stunden</small>
    </div>
    <div class="time-box">
      <span>{{ minutes }}</span>
      <small>Minuten</small>
    </div>
    <div class="time-box">
      <span>{{ seconds }}</span>
      <small>Sekunden</small>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CountdownTimer',
  data() {
    return {
      targetDate: new Date('2026-05-26T00:00:00'),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const timeDifference = this.targetDate.getTime() - now.getTime();

      if (timeDifference < 0) {
        this.days = this.hours = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  }
}
</script>

<style scoped lang="scss">
.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  font-family: "Kefa", serif;
  background-color: $waldgruen-color;
  width: 100vw;
  margin: 3.75rem calc(-50vw + 50%);
  padding: 1.25rem 0;
}

.time-box {
  text-align: center;
}

.time-box span {
  display: block;
  font-size: 10rem;
  font-weight: bold;
  color: $salbei-color;
  margin-bottom: -3rem;
  margin-top: -3rem;
}

.time-box small {
  font-size: 2rem;
  color: #FFFFFF;
}
</style>