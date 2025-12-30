<template>
    <div class="info-box">
      <div class="info-text">
        <h2>
          <span class="highlight">Alle Details auf einen Blick –</span><br>
          damit ihr einfach nur genießen könnt.
        </h2>

        <p class="p-block">
          Von Ansprechpartner bis Outfit – hier findet ihr alle wichtigen Infos.
        </p>
        <p>
          🤝 Eure Ansprechpartner vor Ort
          <br>Unsere großartigen Trauzeug*innen sind für euch da – bei Fragen, Ideen oder spontanen Geistesblitzen:
        </p>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'InfoBox'
}
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
}

.p-block {
  margin-bottom: 1.5rem;
  margin-top: 3rem;
}
</style>