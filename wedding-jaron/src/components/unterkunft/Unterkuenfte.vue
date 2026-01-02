<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownWaldgruen.svg" alt="Pfeil runter"/>
    </div>
    <div class="unterkuenfte">
      <div class="hotel">
        <div class="hotel-header">
          <h3><i class="icon"><font-awesome-icon :icon="['fas', 'hotel']" /></i>Team Hotel</h3>
        </div>
        <div class="hotel-list">
          <a href="https://alter-adler.de">Alter Adler</a>
          <a href="https://www.ferienwohnung-wachtkopf.de">Ferienwohnung Wachtkopf</a>
          <a href="https://ferienwohnung-joachim-fischer.de">Ferienwohnung Joachim Fischer</a>
          <a href="https://www.pension-christina.de">Pension Christina</a>
        </div>
        <div class="taxi-text">
          <p>Am Abend steht ein Taxiunternehmen bereit, das euch sicher in das gewünschte Hotel bringt.</p>
        </div>
      </div>
      <div class="camping">
        <div class="camping-header">
          <h3><i class="icon"><font-awesome-icon :icon="['fas', 'caravan']" /></i>Team Camping</h3>
        </div>
        <p>Für alle, die lieber unter freiem Himmel übernachten möchten, stehen vor Ort Stellplätze zur Verfügung, auf denen mit Camper oder Wohnwagen übernachtet werden kann.
            Die Anzahl der Plätze ist begrenzt.</p>
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
  .icon {
    margin-right: 0.5rem;
  }
.background-card {
  background-color: $salbei-color;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Mobile - Vollbreite mit perfekter Zentrierung
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 2rem 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
}

.unterkuenfte {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 5rem
}

.unterkuenfte > div {
  flex: 1 1 45%; /* beide Divs nehmen jeweils ca. 45% der Breite ein */
  box-sizing: border-box;
}

/* Für mobile Geräte: untereinander anordnen */
@media (max-width: 768px) {
  .unterkuenfte > div {
    flex: 1 1 100%;
  }
}

// .hotel, .camping {
//   width: 100%;
//   max-width: 60vw;
//   margin: 7rem 0 5rem 30rem;

//   @media (max-width: 1024px) {
//     text-align: center;
//     margin: 0;
//   }

//   @media (max-width: 768px) {
//     text-align: center;
//     margin: 0;
//   }

//   @media (max-width: 480px) {
//     text-align: center;
//     margin: 0;
//   }
// }

// .camping {
//   margin: 7rem 0 5rem 0;
// }

.hotel-header, .camping-header {
  h3 {
    color: $waldgruen-color;
    font-weight: 800;
    font-size: 1.6rem;
    text-align: center;
  }
}

.hotel-list
{
  display: flex;
  flex-direction: column;
}

a {
  color: $sandstein-color;
  text-decoration: none;
  transition: color 0.3s ease; /* sanfter Übergang beim Hover */
}

a:link,
a:visited {
  color: $sandstein-color; /* Standardfarbe für normale und besuchte Links */
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover,
a:active {
  color: $waldgruen-color; /* Farbe beim Hover oder aktiv */
}

</style>