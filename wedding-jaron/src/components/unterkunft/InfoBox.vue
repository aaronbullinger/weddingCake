<template>
  <main>
    <div class="info-box">
      <div class="info-text">

        <h2>
          <span class="highlight">Ob Campingbus oder Hotelbett –</span><br>
          ihr sollt’s gemütlich haben.
        </h2>

        <p>
          Übernachten ganz in der Nähe – wir haben mitgedacht.
        </p>
        <p>
          Ihr wollt nach der Feier nicht mehr weit fahren? Können wir absolut verstehen.
          Deshalb gibt’s direkt vor Ort die Möglichkeit, im Auto oder Camper zu übernachten – ganz unkompliziert auf dem Gelände des Steinbachhofs.
        </p>
        <p>
          Für alle, die lieber ein richtiges Bett möchten, haben wir ein paar Unterkünfte in der Nähe rausgesucht.
          Auf Wunsch reservieren wir euch gerne im Vorfeld ein Zimmer – sagt uns einfach Bescheid:
        </p>

      </div>
      <div class="info-image">
        <img src="@/assets/safeOurDateImg2.png" alt="Paarbild">
      </div>
    </div>
  </main>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
main {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  gap: 60px;
  padding-bottom: 10rem;
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 400px;
}

.info-image img {
  width: 150px;
  height: 400px;
  object-fit: cover;
  border-radius: 100px;
  filter: grayscale(100%);
  margin-top: 50px;
  margin-right: 100px;
}

.info-text {
  flex: 2;
  max-width: 600px;
  text-align: left;
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 400;
  color: $waldgruen-color;
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
  margin-bottom: 15px;
  margin-right: -50px;
}
</style>