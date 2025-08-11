<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownBrown.svg" alt="Pfeil runter"/>
    </div>
    <div class="description">
      <h3>Feiern auf dem Weingut Steinbachhof</h3>
      <h4 class="second-header">Eine Location mit besonderem Ambiente</h4>

      <div class="description-block">
        <div class="text-container">
          <p>
            Wein. Wald. Wohlfühlen.
            Dieses Motto des Naturparks Strombergs spüren Sie bereits bei der Anfahrt zum Steinbachhof.
            <br>Unweit von Stuttgart lassen Sie die Hektik des Alltags hinter sich und finden bei uns eine Insel
            der Ruhe und Erholung, eingebettet in sanfte Hügel mit weiten Ausblicken.
          </p>

        </div>
        <div class="camping-map">
          <iframe class="google-maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.40386439827!2d8.960192766641338!3d49.00014218683695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977f4711ec8e97%3A0xf75ad920a6e87d84!2sWeingut%20Steinbachhof%20und%20Steinbachhof%20Event-GmbH!5e0!3m2!1sde!2sde!4v1754946967723!5m2!1sde!2sde"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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

.second-header {
  margin: -1.5rem 0 0 0;
}

.description-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 75vw;
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

.camping-map {
  width: 35rem;
  height: 35rem;
  overflow: hidden;
}

.google-maps {
  width: 100%;
  height: 100%;
  border: 0;
}

.contact-info {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  border-top: 1.5px solid $sandstein-color;
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
  color: $sandstein-color;
  font-size: 0.9rem;
  line-height: 1.4;

  p {
    margin: 0;
  }
}
</style>
