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
  background-color: $nebelblau-color;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  font-family: Kefa, serif;
}

.timeline-container {
  background-color: $nebelblau-color;
  padding: 2.5rem;
  width: 100%;
  max-width: 50rem;
  position: relative;
}

.timeline-title {
  text-align: center;
  font-size: 2rem;
  color: $espresso-color;
  margin-bottom: 3rem;
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
}

.timeline-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  gap: 1.5rem 0.5rem;
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
}

.timeline-date {
  font-weight: bold;
  font-size: 1.3rem;
  color: $lightblue-color;
  width: 8rem;
  text-align: right;
  flex-shrink: 0;
}

.timeline-description {
  font-size: 0.9rem;
  color: $lightblue-color;
  white-space: nowrap;
  overflow: visible;
  text-overflow: unset;
}
</style>