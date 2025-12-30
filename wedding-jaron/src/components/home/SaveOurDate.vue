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
        <img src="@/assets/safeOurDateImg1.png" alt="Bild 1">
        <span class="date-number">26</span>
      </div>
      <div class="date-item">
        <img src="@/assets/safeOurDateImg2.png" alt="Bild 1">
        <span class="date-number">05</span>
      </div>
      <div class="date-item">
        <img src="@/assets/safeOurDateImg3.png" alt="Bild 1">
        <span class="date-number">26</span>
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

  // Mobile First - Tablet and below
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

    // Tablet
    @media (max-width: 1024px) {
      font-size: 6rem;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 4rem;
      text-align: center;
      line-height: 0.8;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  // Mobile layout adjustment
  @media (max-width: 768px) {
    flex: none;
    text-align: center;
  }
}

.date-images {
  flex: 1 1 55%;
  max-width: 55%;
  display: flex;
  gap: 3rem;
  justify-content: flex-end;

  // Tablet
  @media (max-width: 1024px) {
    gap: 2rem;
  }

  // Mobile
  @media (max-width: 768px) {
    flex: none;
    max-width: 100%;
    gap: 1rem;
    justify-content: space-around;
  }

  // Small Mobile - Stack vertically if needed
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
}

.date-item {
  position: relative;
  width: 9rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 6rem;

  // Tablet
  @media (max-width: 1024px) {
    width: 9rem;
    height: 20rem;
    border-radius: 5rem;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 8rem;
    height: 15rem;
    border-radius: 4rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    width: 6rem;
    height: 12rem;
    border-radius: 3rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
}

.date-number {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 7rem;
  font-weight: bold;
  color: $nebelblau-color;
  pointer-events: none;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 6rem;
    bottom: 1rem;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 5rem;
    bottom: 0.8rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 4.5rem;
    bottom: 0.6rem;
  }
}
</style>
