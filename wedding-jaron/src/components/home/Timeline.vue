<template>
    <div class="timeline-wrapper">
      <div class="timeline-container">
        <h2 class="timeline-title">Wir</h2>
        <div class="vertical-line"></div>
        <div class="timeline-list">
          <div
              class="timeline-item"
              v-for="(event, index) in events"
              :key="index"
          >
            <div class="timeline-date">{{ event.date }}</div>
            <div class="timeline-line"></div>
            <div class="timeline-description">{{ event.description }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Timeline',
  data() {
    return {
      events: [
        { date: '24.09.2021', description: 'Erstes Kennenlernen' },
        { date: '23.10.2021', description: 'Unser erstes Treffen' },
        { date: '08.12.2021', description: 'Erster Kuss' },
        { date: '26.02.2022', description: 'Zusammen gekommen' },
        { date: '28.05.2022', description: 'Erstes “Ich Liebe Dich”' },
        { date: '26.04.2024', description: 'Erste gemeinsame Wohnung' },
        { date: '08.08.2024', description: 'Verlobt' },
        { date: '26.05.2026', description: 'Official Family' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.timeline-wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background-color: $nebelblau-color;
  display: flex;
  overflow-x: hidden; // Prevent horizontal scroll on mobile
}

.timeline-container {
  padding: 2.5rem;
  width: 100%;
  max-width: none;
  position: relative;

  // Mobile
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
}

.timeline-title {
  text-align: center;
  font-size: 2rem;
  color: $espresso-color;
  margin-bottom: 3rem;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
}

.vertical-line {
  position: absolute;
  top: 9rem;
  bottom: 0;
  width: 0.05rem;
  background-color: white;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);

  // Tablet
  @media (max-width: 1024px) {
    top: 8rem;
  }

  // Mobile - Move line to left side
  @media (max-width: 768px) {
    left: 2rem;
    transform: none;
    top: 6rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    left: 1.5rem;
    top: 5rem;
  }
}

.timeline-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  gap: 1.5rem 0.5rem;

  // Mobile - Align left
  @media (max-width: 768px) {
    align-items: flex-start;
    padding-left: 3.5rem;
    gap: 2rem 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    padding-left: 3rem;
    gap: 1.5rem 0;
  }
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 7rem;
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 0;
  width: 100%;
  max-width: 32rem;

  // Tablet
  @media (max-width: 1024px) {
    gap: 5rem;
    max-width: 28rem;
  }

  // Mobile - Stack vertically
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: none;
    margin-bottom: 2rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;

    &::before {
      left: -2.5rem;
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}

.timeline-date {
  font-weight: bold;
  font-size: 1.3rem;
  color: $sandstein-color;
  width: 8rem;
  text-align: right;
  flex-shrink: 0;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    width: 7rem;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: auto;
    text-align: left;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 1rem;
  }
}

.timeline-description {
  font-size: 1rem;
  color: $sandstein-color;
  font-family: Helvetica, sans-serife;
  white-space: nowrap;
  overflow: visible;
  text-overflow: unset;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 0.85rem;
  }

  // Mobile - Allow text wrapping
  @media (max-width: 768px) {
    white-space: normal;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
}

.timeline-line {
  // Hide on mobile as we use circles instead
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
