
<template>
  <div class="info-box">
    <div class="info-text">

      <h2>
        <span class="highlight">Ein Ort, der einfach passt</span><br>
        Zwischen Wein und Lieblingsmenschen
      </h2>

      <p>
        Unsere Feier findet im wunderschönen Steinbachhof in Vaihingen an der Enz statt – einem echten Wohlfühlort mitten in den Weinbergen.
        Rustikales Fachwerk trifft hier auf moderne Eventlocation, dazu ein Innenhof, der zum Anstoßen einlädt, und eine Aussicht, die schon fast kitschig schön ist.
      </p>
      <p>
        Egal, ob ihr eher Team Tanzfläche oder Team Weinprobe seid – hier kommt jede*r auf seine Kosten.<br></br>
        <i><font-awesome-icon icon="location-dot" /></i> Die genaue Adresse und alle Infos zur Anfahrt findet ihr weiter unten.<br></br>
       <i><font-awesome-icon :icon="['fas', 'bed']" /></i> Wer in der Nähe übernachten möchte, bekommt von uns natürlich ein paar Tipps.
      </p>
      <p>
        Wir freuen uns riesig, diesen besonderen Tag mit euch an so einem coolen Ort zu feiern!
      </p>

    </div>
    <div class="info-image">
      <img src="@/assets/safeOurDateImg1.png" alt="Paarbild">
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.i {
  color: $espresso-color;
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 75vw;
  width: 100%;
  margin: 0 auto;
  gap: 3.7rem;
  box-sizing: border-box;

  // Tablet
  @media (max-width: 1024px) and (min-width: 769px) {
    max-width: 90vw;
    gap: 2rem;
    flex-direction: row;
    text-align: center;
    padding-top: 3rem;
  }

  // Mobile
  @media (max-width: 768px) {
    max-width: 95vw;
    gap: 1.5rem;
    flex-direction: row;
    padding: 0 1rem;
    padding-top: 1rem;
    box-sizing: border-box;
  }

  // Small Mobile
  @media (max-width: 480px) {
    max-width: 95vw;
    gap: 0.5rem;
    padding: 0 1rem;
    flex-direction: row;
    margin: 0 auto;
    box-sizing: border-box;
  }
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  width: 12rem;
  height: 30vh;
  margin-right: 0;

  // Tablet
  @media (max-width: 1024px) {
    justify-content: center;
    height: 20rem;
    order: -1;
  }

  // Mobile
  @media (max-width: 768px) {
    justify-content: center;
    height: 15rem;
    margin: 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    justify-content: flex-start;
    height: 12rem;
  }
}

.info-image img {
  width: 12rem;
  height: 30vh;
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
    margin-right: 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    width: 5rem;
    height: 12rem;
    border-radius: 2.5rem;
    margin-right: 0;
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
  color: $nebelblau-color;

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
  color: $espresso-color;
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