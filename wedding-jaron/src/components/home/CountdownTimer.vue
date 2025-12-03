
<template>
  <div class="countdown-timer">
    <div class="time-box" v-for="(item, index) in timeItems" :key="index">
      <span>{{ item.value }}</span>
      <small>{{ item.label }}</small>
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
      seconds: 0,
      isMobile: false
    };
  },
  computed: {
    timeItems() {
      const items = [
        { label: 'Tage', value: this.days },
        { label: 'Stunden', value: this.hours },
        { label: 'Minuten', value: this.minutes }
      ];

      // Sekunden nur auf Desktop anzeigen
      if (!this.isMobile) {
        items.push({ label: 'Sekunden', value: this.seconds });
      }

      return items;
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
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
  gap: 6.5rem;
  font-family: "Kefa", serif;
  background-color: $waldgruen-color;
  width: 100vw;
  margin: 3.75rem calc(-50vw + 50%);
  padding: 1.25rem 0;

  // Tablet
  @media (max-width: 1024px) {
    gap: 4rem;
    margin: 3rem calc(-50vw + 50%);
  }

  // Mobile
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin: 2rem calc(-50vw + 50%);
    padding: 1rem 0.5rem;
    flex-wrap: wrap;
    // Grid Layout für Mobile mit 3 Elementen
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
  }

  // Small Mobile
  @media (max-width: 480px) {
    padding: 0.8rem 0.25rem;
  }

  // Very Small Mobile - 3x1 Grid für bessere Darstellung
  @media (max-width: 380px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0.5rem;
    justify-items: center;
  }
}

.time-box {
  text-align: center;

  span {
    display: block;
    font-size: 10rem;
    font-weight: bold;
    color: $salbei-color;
    margin: -3rem 0;

    // Tablet
    @media (max-width: 1024px) {
      font-size: 8rem;
      margin: -2.5rem 0;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 6rem;
      margin: -1rem 0; // Reduziert von -2rem auf -1rem
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 4.5rem;
      margin: -0.5rem 0; // Reduziert von -1.5rem auf -0.5rem
    }

    // Very Small Mobile
    @media (max-width: 380px) {
      font-size: 3.5rem;
      margin: -0.25rem 0; // Reduziert von -1rem auf -0.25rem
    }
  }

  small {
    font-size: 2rem;
    color: #FFFFFF;

    // Tablet
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }

    // Very Small Mobile
    @media (max-width: 380px) {
      font-size: 1rem;
    }
  }
}
</style>