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
        Am <strong>26.05.26</strong>, ja, das ist ein Dienstag, feiern wir uns –
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
        Trauzeuginnen – dir jederzeit gerne zur Verfügung!
      </p>

      <button class="callToAction-button">Mehr erfahren</button>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  margin: 0 auto;
  padding-bottom: 5rem;
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 25rem;
}

.info-image img {
  width: 9rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 0.5rem;
  margin-right: 6rem;
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
  margin-bottom: 0.9rem;
  margin-right: -3rem;
}
</style>