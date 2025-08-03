<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownBrown.svg" alt="Pfeil runter"/>
    </div>
    <div class="description">
      <h3>Feiern auf dem Weingut Steinbachhof</h3>
      <h4>Eine Location mit besonderem Ambiente</h4>

      <div class="description-block">
        <div class="text-container">
          <p>
            Wein. Wald. Wohlfühlen.
            Dieses Motto des Naturparks Strombergs spüren Sie bereits bei der Anfahrt zum Steinbachhof.
            Unweit von Stuttgart lassen Sie die Hektik des Alltags hinter sich und finden bei uns eine Insel
            der Ruhe und Erholung, eingebettet in sanfte Hügel mit weiten Ausblicken.
          </p>

        </div>
        <div class="karte-container">
          <img class="karte" src="@/assets/karte.jpg" alt="Karte" />
        </div>

        <div class="contact-info">
          <div class="pin-column">
            <span class="footer-emoji" aria-hidden="true">📍</span>
          </div>
          <div class="address">
            <p>Steinbachhof Event - GmbH</p>
            <p>Hofgut Steinbachhof 1</p>
            <p>71665 Vaihingen/Enz</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LocationInfo'
};
</script>

<style scoped lang="scss">
.background-card {
  background-color: $nebelblau-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  width: 100%;
  max-width: 60vw;
  margin: 7rem 0 5rem 0;
}

h3 {
  color: $espresso-color;
  font-family: Kefa, serif;
  font-size: 2rem;
  margin-top: 0;
}

h4 {
  margin: -1rem 0 0 0;
  font-size: 1rem;
  font-weight: bold;
  color: $sandstein-color;
}

.description-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto 0 auto;
  gap: 2rem;
}

.text-container,
.karte-container {
  flex: 1;
  max-width: 50%;
}

.text-container p {
  color: $espresso-color;
  text-align: left;
  max-width: 80%;
  margin-top: 0;
}

.karte {
  width: 100%;
  height: auto;
  max-height: 25rem;
  aspect-ratio: auto;
  object-fit: cover;
  display: block;
}

.contact-info {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  border-top: 1px solid $salbei-color;
  padding-top: 1rem;
  width: 30%;
  max-width: 30%;
}

.pin-column {
  width: 1rem;
  text-align: center;
}

.emoji {
  font-size: 1rem;
  line-height: 1.4;
}

.address {
  color: $salbei-color;
  font-size: 0.9rem;
  line-height: 1.4;

  p {
    margin: 0;
  }
}
</style>
