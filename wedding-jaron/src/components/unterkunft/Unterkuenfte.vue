<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownWaldgruen.svg" alt="Pfeil runter"/>
    </div>
    <div class="hotel">
      <div class="hotel-header">
        <h3>Team Hotel?</h3>
      </div>
      <div class="hotel-list">
        <a href="https://alter-adler.de">Alter Adler</a>
        <a href="https://www.ferienwohnung-wachtkopf.de">Ferienwohnung Wachtkopf</a>
        <a href="https://ferienwohnung-joachim-fischer.de">Ferienwohnung Joachim Fischer</a>
        <a href="https://www.pension-christina.de">Pension Christina</a>
      </div>
    </div>
    <div class="camping">
      <div class="camping-header">
        <h3>Team Camping?</h3>
      </div>
      <div class="camping-map">
        <iframe class="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.40386439827!2d8.960192766641338!3d49.00014218683695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977f4711ec8e97%3A0xf75ad920a6e87d84!2sWeingut%20Steinbachhof%20und%20Steinbachhof%20Event-GmbH!5e0!3m2!1sde!2sde!4v1754946967723!5m2!1sde!2sde"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div class="taxi-text">
        <p>Außerdem steht am Abend ein Taxiunternehmen bereit, das euch auf Wunsch sicher zur Unterkunft bringt.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Unterkuenfte'
};

</script>

<style scoped lang="scss">
.background-card {
  background-color: $salbei-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hotel, .camping {
  width: 100%;
  max-width: 60vw;
  margin: 7rem 0 5rem 30rem;
}

.camping {
  margin: 7rem 0 5rem 0rem
}

.hotel-header, .camping-header {
  h3 {
    color: $waldgruen-color;
    font-weight: 800;
    font-size: 1.6rem;
  }
}

.hotel-list
{
  display: flex;
  flex-direction: column;
}

a {
  color: $gravelgrau-color
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

.taxi-text {
  color: $gravelgrau-color;
  margin-top: 10rem;
  width: 70%;
}
</style>