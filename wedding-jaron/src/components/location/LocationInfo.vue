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
            <br>Unweit von Stuttgart lassen Sie die Hektik des Alltags hinter sich und finden bei uns eine Insel
            der Ruhe und Erholung, eingebettet in sanfte Hügel mit weiten Ausblicken.
          </p>
        </div>
        <div class="karte-container">
          <img class="karte" src="@/assets/karte.jpg" alt="Karte" />
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
  padding: 5rem 2rem; // damit Inhalt nicht an Rand klebt
  display: flex;
  flex-direction: column;
  align-items: center;
}



.description {
  width: 100%;
  max-width: 70vw;
  margin-top: 5rem;
}

h3 {
  color: $espresso-color;
  font-family: Kefa, serif;
  font-size: 2rem;
  margin-top: 0;
}

h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: $sandstein-color;
}

.description-block {
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
  height: auto;               // 🟢 wichtig für korrektes Seitenverhältnis
  max-height: 25rem;
  aspect-ratio: auto;         // optional – erlaubt Browser das Originalverhältnis zu nehmen
  object-fit: cover;          // oder contain – je nach gewünschtem Effekt
  display: block;
}
</style>
