<template>
  <!-- Info Box Section-->
  <div class="info-box">
    <div class="info-image">
      <img src="@/assets/homePageInfoImg.png" alt="Paarbild">
    </div>

    <div class="info-text">
      <h2>
        <span class="highlight">Wir feiern nochmal richtig</span><br>
        und das mit Dir!
      </h2>
      <p>
        Mit großer Vorfreude laden wir dich zu unserem ganz besonderen Tag ein.
        <br>
        Am <strong>26.05.2026</strong>, ja, das ist ein Dienstag, feiern wir uns –
        mit einer freien Trauung, gutem Essen, Musik und allem, was das Herz berührt.
        Wir freuen uns riesig, diesen unvergesslichen Moment mit dir zu teilen!
      </p>
      <p>
        Auf dieser Homepage findest du alle wichtigen Informationen rund um unsere Hochzeit –
        von Ablauf über Unterkunft bis hin zu Geschenken. Wir halten alles stets aktuell,
        damit du immer bestens informiert bist.
      </p>
      <p>
        Solltest du trotzdem noch Fragen haben, stehen wir – und natürlich auch unsere lieben
        Trauzeug:innen – dir jederzeit gerne zur Verfügung!
      </p>

      <button v-if="isVisible" class="callToAction-button">Mehr erfahren</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isVisible = false;
</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  margin: 0 auto;
  padding: 0 1rem 5rem;
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

.info-image {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 25rem;

  // Mobile
  @media (max-width: 768px) {
    height: auto;
    flex: none;
  }

  img {
    width: 12rem;
    height: 25rem;
    object-fit: cover;
    object-position: 70% center;
    border-radius: 6rem;
    filter: grayscale(100%);
    margin-top: 0.5rem;
    margin-right: 5rem;

    // Tablet
    @media (max-width: 1024px) {
      width: 12rem;
      height: 20rem;
      border-radius: 6rem;
      margin-right: 3rem;
    }

    // Mobile
    @media (max-width: 768px) {
      width: 11rem;
      height: 18rem;
      border-radius: 5rem;
      margin: 0;
    }

    // Small Mobile
    @media (max-width: 480px) {
      width: 9rem;
      height: 15rem;
      border-radius: 4rem;
    }
  }
}

.info-text {
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
  // Mobile responsive button styles
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    margin: 1rem auto 0;
    display: block;
  }
}
</style>
