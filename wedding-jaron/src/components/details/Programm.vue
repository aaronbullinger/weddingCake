<template>
  <div class="info-box">
    <!-- Oberer Halbkreis -->
    <div class="background-card-top">
      <div class="info-text">
        <h2 class="subtitle espresso">Programm & Beiträge</h2>
        <p class="p-block center">
          Ihr habt Lust, uns mit einem Spiel zu überraschen, eine Rede zu halten
          oder den Abend mit einer schönen Idee zu bereichern?
          <br /><br />
          Meldet euch gerne vorher bei unseren Trauzeuginnen.
          Sie koordinieren alles, damit der Ablauf entspannt bleibt.
        </p>
      </div>
    </div>

    <!-- Unterer Halbkreis -->
    <div class="background-card">
      <div class="timeline-wrapper">
      <div class="timeline-container">
        <h2 class="timeline-title subtitle sandstein">Ablauf am Hochzeitstag</h2>
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
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Programm',
  data() {
    return {
      events: [
        { date: '15.30 Uhr', description: 'Empfang' },
        { date: '16.00 Uhr', description: 'Freie Trauung' },
        { date: '17.00 Uhr', description: 'Aperitifooo' },
        { date: '18.00 Uhr', description: 'Seating' },
        { date: '18.30 Uhr', description: 'Abendessen' },
        { date: '20.30 Uhr', description: 'Dessert' },
        { date: '21.00 Uhr', description: 'Party & Tanz' },
        { date: '23.00 Uhr', description: 'Mitternachtssnack' }, 
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .info-box {
    position: relative; // wichtig, damit die Kreise relativ zueinander liegen
    overflow: visible;  // sonst wird der obere Kreis ggf. abgeschnitten
  }
/* --------------------
   Kreise
-------------------- */

.background-card-top {
  display: flex;
  justify-content: center;
  padding: 5rem 0 10rem 0;
  margin: 0 auto -15rem auto;
  position: relative;
  z-index: 10;
  background-color: $nebelblau-color; // Beispielfarbe
  border-radius: 0 0 100% 100%; // Halbkreis unten
  max-width: 75vw;

  // Mobile - Vollbreite mit perfekter Zentrierung
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    margin: 0 auto;
    padding: 2rem 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
}

.background-card {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;
  max-width: 80vw;

  // Mobile - Vollbreite mit perfekter Zentrierung
  @media (max-width: 768px) {
    width: 100vw;
    margin: -8rem auto 0 auto;
    padding: 2rem 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
}

.description {
  // Mobile description
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
}


/* --------------------
   Text
-------------------- */

.info-text {
  width: 100%;
  text-align: center;
  
  //padding: 2.5rem 0;
  margin-top:  1rem;
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

.subtitle {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  font-family: Abhaya Libre;
  font-weight: 800;

  &.espresso {
    color: $espresso-color;
  }

  &.sandstein {
    color: $sandstein-color;
  }
}

.p-block {
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0 auto;
  max-width: 32rem;

  &.center {
    text-align: center;
  }
}

/* --------------------
   Timeline
-------------------- */
// .timeline-wrapper {
//   position: relative;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 100vw;
//   background-color: $nebelblau-color;
//   display: flex;
//   overflow-x: hidden; // Prevent horizontal scroll on mobile
// }

.timeline-container {
  padding: 2.5rem 0;
  margin-top:  15rem;
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
  //padding-left: 2rem;
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
  color: $lightblue-color;
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
    font-size: 1.1rem;
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
  font-size: 0.9rem;
  color: $lightblue-color;
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