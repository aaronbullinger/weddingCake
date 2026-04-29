<template>
  <!-- Save Our Date Section -->
  <div class="save-date-section">
    <div class="save-text">
      <h1>
        SAVE<br>
        OUR<br>
        DATE
      </h1>
    </div>

    <div class="date-images">
      <div class="date-item">
        <span class="date-number">26</span>
        <span class="date-number">05</span>
      </div>
      <div class="date-item">
        <span class="date-number">20</span>
        <span class="date-number">26</span>
      </div>
      <div class="date-item">
        <img src="@/assets/safeOurDateImg3.png" alt="Wedding visual element">
      </div>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">

.save-date-section {
  width: 90%;
  max-width: 75%;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: wrap;            // Ermöglicht Umbruch

  @media (max-width: 1240px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    // iPad und ähnliche Tablet-Größen
    gap: 3rem;
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 95%;
    margin: 1.5rem auto;
  }
}

.save-text {
  flex: 1 1 40%;
  font-family: Abril Fatface, serif;
  color: $waldgruen-color;
  line-height: 0.7;
  text-align: left;

  h1 {
    font-size: 8rem;
    margin: 0;
    word-break: break-word;

    @media (max-width: 1240px) {
      font-size: 7rem;
      text-align: center;
    }

    @media (max-width: 1024px) {
      font-size: 6rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 4rem;
      text-align: center;
      line-height: 0.8;
    }

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 1240px) {
    flex: none;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex: none;
    text-align: center;
  }
}

.date-images {
  flex: 1 1 55%;
  max-width: 55%;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;

  @media (max-width: 1240px) {
    flex: none;
    max-width: 100%;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    max-width: 100%;
    justify-content: space-around;
    flex: none;
  }

  @media (max-width: 768px) {
    flex: none;
    max-width: 100%;
    gap: 1rem;
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
}

.date-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 12rem;
  height: 30vh;
  border-radius: 10rem;
  background-color: $nebelblau-color;
  color: $sandstein-color;
  text-align: center;
  flex-shrink: 0;          // Verhindert Schrumpfen der date-items

  .date-number {
    font-size: 6rem;
    font-weight: bold;
    line-height: 1;
  }

  img {
    width: 12rem;            // Feste Breite für das Bild
    height: 30vh;            // Feste Höhe für das Bild
    object-fit: cover;
    border-radius: inherit;
    filter: grayscale(100%);
  }

  @media (max-width: 1024px) {
    width: 10rem;
    height: 18rem;

    .date-number {
      font-size: 7rem;
    }

    img {
      width: 10rem;           // Angepasste Breite für Mobile
      height: 18rem;         // Angepasste Höhe für Mobile
    }
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 16rem;

    .date-number {
      font-size: 5rem;
    }

    img {
      width: 8rem;           // Angepasste Breite für Mobile
      height: 16rem;         // Angepasste Höhe für Mobile
    }
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 12rem;

    .date-number {
      font-size: 4rem;
    }

    img {
      width: 6rem;           // Angepasste Breite für sehr kleine Screens
      height: 12rem;         // Angepasste Höhe für sehr kleine Screens
    }
  }
}
</style>
