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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.save-text {
  font-family: Kefa, serif;
  color: $waldgruen-color;
  line-height: 0.7;
  text-align: left;
  padding-right: 12rem;

  h1 {
    font-size: 8rem; // statt 11.9rem
    margin: 0;
  }
}

.date-images {
  display: flex;
  gap: 3rem;
}

.date-item {
  position: relative;
  width: 9rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 6rem;
}

.date-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.date-number {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  font-weight: bold;
  color: $nebelblau-color;
  pointer-events: none;
}
</style>