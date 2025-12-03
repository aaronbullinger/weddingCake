<template>
  <div class="info-box">
    <div class="info-text">
      <h2>
        <span class="highlight">Damit wir besser planen können</span><br>
        gebt uns doch gerne Feedback
      </h2>

      <p>
        Bitte gib uns kurz Bescheid, ob du an unserem großen Tag dabei bist.
        Teile uns mit, ob du mit Begleitung oder Kindern kommst,
        ob es Unverträglichkeiten oder Allergien gibt und ob du eine Übernachtung brauchst.
      </p>
      <p>
        Informationen zur Unterkunft und zur Location findest du im Menü unter den jeweiligen Punkten.
      </p>
    </div>
    <div class="info-image">
      <img src="@/assets/safeOurDateImg3.png" alt="Paarbild">
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75vw;
  margin: 0 auto;
  gap: 3.7rem;

  // Tablet
  @media (max-width: 1024px) {
    width: 90vw;
    gap: 2rem;
    flex-direction: row;
    text-align: center;
    padding-top: 3rem;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 95vw;
    gap: 1.5rem;
    flex-direction: row;
    padding: 0 1rem;
    padding-top: 1rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    width: calc(100vw - 1rem);
    gap: 0.5rem;
    padding: 0 0.5rem;
    flex-direction: row;
    margin: 0 auto;
  }
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 25rem;
  margin-right: 0;

  // Tablet
  @media (max-width: 1024px) {
    justify-content: center;
    height: 20rem;
    order: -1;
  }

  // Mobile
  @media (max-width: 768px) {
    height: 15rem;
    margin: 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    height: 12rem;
  }
}

.info-image img {
  width: 9rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 3rem;
  margin-right: 5rem;

  // Tablet
  @media (max-width: 1024px) {
    width: 8rem;
    height: 20rem;
    margin: 0;
    border-radius: 4rem;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 6rem;
    height: 15rem;
    border-radius: 3rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    width: 5rem;
    height: 12rem;
    border-radius: 2.5rem;
  }
}

.info-text {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;

  // Tablet
  @media (max-width: 1024px) {
    text-align: left;
    max-width: 100%;
  }

  // Mobile
  @media (max-width: 768px) {
    text-align: left;
  }

  // Small Mobile
  @media (max-width: 480px) {
    text-align: left;
  }
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  color: $waldgruen-color;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
}

.info-text h2 .highlight {
  color: $salbei-color;
  font-weight: bold;
}

.info-text p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: $espresso-color;
  font-family: Helvetica, sans-serif;
  margin-bottom: 0.9rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-bottom: 0.6rem;
  }
}
</style>