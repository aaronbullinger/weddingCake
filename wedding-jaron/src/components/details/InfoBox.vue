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
        <i class="icon"><font-awesome-icon :icon="['fas', 'user-group']" /></i>
        Eure Ansprechpartner vor Ort
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

.info-text {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    line-height: 1.2;
    font-weight: 400;
    color: $waldgruen-color;

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

    &.p-block {
      margin: 3rem 0 1.5rem 0; // oben: 3rem, unten: 1.5rem
    }
  }
}

.icon {
  margin-right: 0.5rem;
}

.info-image img {
  width: 12rem;
  height: 30vh;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 3rem;
  margin-right: 5rem;
}
</style>
