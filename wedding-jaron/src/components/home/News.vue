<template>
  <!-- Info Box Section-->
  <div class="news-box">
    <div class="news-content">
      <h2>
        <span>Wir haben neue Infos für Euch!</span><br>
      </h2>
      <p>
        Schau gerne schnell mal rein!
      </p>
      <a class="callToAction-button" href="/details#presents">Zeig mir die News</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">
.news-box {
  background-color: $salbei-color;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3.5rem;
  //margin: 0 auto;
  //padding: 0 1rem 5rem;
  max-width: 1200px;

  // Mobile
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 3rem;
    text-align: center;
    max-width: 85%;
  }
}

.news-content {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;

  // Mobile
  @media (max-width: 768px) {
    flex: none;
    max-width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    font-weight: 400;
    color: $waldgruen-color;

    // Tablet
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }

    .highlight {
      color: $salbei-color;
      font-weight: bold;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: $espresso-color;
    font-family: Helvetica, sans-serif;
    margin-bottom: 0.9rem;
    margin-right: -3rem;

    // Tablet and Mobile
    @media (max-width: 1024px) {
      margin-right: 0;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.7;
      text-align: left;
      margin-bottom: 1rem;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
}

.callToAction-button {
  background-color: $espresso-color;
  color: $sandstein-color;
  // Mobile responsive button styles
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    margin: 1rem auto 0;
    display: block;
  }
}
</style>
