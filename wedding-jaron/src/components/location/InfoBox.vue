
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
        Egal ob ihr eher Team Tanzfläche oder Team Weinprobe seid – hier kommt jede*r auf seine Kosten.
        📌 Die genaue Adresse und alle Infos zur Anfahrt findet ihr weiter unten.<br>🛏️ Wer in der Nähe übernachten will, bekommt von uns natürlich ein paar Tipps.
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
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75vw;
  margin: 0 auto;
  gap: 3.7rem;
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 25rem;
  margin-right: 0;
}

.info-image img {
  width: 9rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 3rem;
  margin-right: 5rem;
}

.info-text {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  color: $nebelblau-color;
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
}

// Mobile Responsive Design
@media (max-width: 768px) {
  .info-box {
    flex-direction: column;
    width: 90vw;
    gap: 2rem;
    text-align: center;
  }

  .info-text {
    flex: none;
    max-width: none;
    order: 2;
    text-align: center;
  }

  .info-text h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .info-text p {
    font-size: 0.85rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .info-image {
    flex: none;
    justify-content: center;
    height: auto;
    order: 1;
    margin-right: 0;
  }

  .info-image img {
    width: 7rem;
    height: 20rem;
    margin-top: 1rem;
    margin-right: 0;
    border-radius: 4rem;
  }
}

@media (max-width: 480px) {
  .info-box {
    width: 95vw;
    gap: 1.5rem;
  }

  .info-text h2 {
    font-size: 1.3rem;
  }

  .info-text p {
    font-size: 0.8rem;
  }

  .info-image img {
    width: 6rem;
    height: 18rem;
    border-radius: 3rem;
  }
}
</style>