<template>
  <div class="trauzeugen">
    <!-- Trauzeuge 1 -->
    <div class="trauzeuge">
      <div class="trauzeugen-text">
        <p class="trauzeuge-name">Sophie aka Zopfel</p>
        <div class="trauzeuge-kontakt">
          <p><span class="emoji">📞</span>+49 176 61147105</p>
          <p><span class="emoji">✉️</span><a href="mailto:sophie.victoria@gmx.de">sophie.victoria@gmx.de</a></p>
        </div>
      </div>
      <img src="@/assets/Zopfel.jpg" alt="Zopfel" class="trauzeugen-image">
    </div>

    <!-- Trauzeuge 2 -->
    <div class="trauzeuge">
      <div class="trauzeugen-text">
        <p class="trauzeuge-name">Marcel aka Celmo</p>
        <div class="trauzeuge-kontakt">
          <p><span class="emoji">📞</span>+49 174 9160164</p>
          <p><span class="emoji">✉️</span><a href="mailto:marcel.falke@gmx.net">marcel.falke@gmx.net</a></p>
        </div>
      </div>
      <img src="@/assets/Celmo.png" alt="Celmo" class="trauzeugen-image">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Trauzeugen'
}
</script>

<style scoped lang="scss">
.trauzeugen {
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  width: 75vw;
  max-width: 100%;
  margin: 3rem auto 0;
  margin-bottom: 5rem;
  flex-wrap: wrap;
}

.trauzeuge {
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  gap: 5rem;
}

.trauzeugen-image {
  width: 12rem;
  height: 30vh;
  object-fit: cover;
  object-position: center top; /* Zeigt den oberen Bildbereich (Köpfe) */
  border-radius: 6rem;
  filter: grayscale(100%);
}

.trauzeugen-text {
  text-align: left;
}

.trauzeuge-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
}

.trauzeuge-kontakt p {
  margin: 0.2rem 0;
  font-size: 0.8rem;
  color: $espresso-color;
  font-family: Helvetica, sans-serif;
}

/* Tablet: beide Trauzeugen untereinander, mittig */
@media (max-width: 1024px) and (min-width: 769px) {
  .trauzeugen {
    flex-direction: column; /* Trauzeugen untereinander */
    align-items: center; /* mittig */
    gap: 3rem;
  }

  .trauzeuge {
    flex-direction: row; /* Standard: Bild links, Text rechts */
    justify-content: center; /* mittig innerhalb der Box */
    align-items: center;
  }

  /* Zweiter Trauzeuge: Bild rechts, Text links */
  .trauzeuge:nth-child(2) {
    flex-direction: row-reverse;
  }

  .trauzeugen-text {
    text-align: left;
  }

  .trauzeugen-image {
    margin: 0 1rem 0 0; /* Abstand rechts vom Bild */
  }

  /* Für zweiten Trauzeugen, da Bild rechts */
  .trauzeuge:nth-child(2) .trauzeugen-image {
    margin: 0 0 0 1rem; /* Abstand links vom Bild */
  }
}


/* Mobile: Name über Bild, Kontakt unter Bild */
@media (max-width: 768px) {
  .trauzeugen {
    flex-direction: column;
    gap: 5rem;
  }

  .trauzeuge {
    flex-direction: column; /* Bild unter Name, Kontakt unter Bild */
    align-items: center;
    text-align: center;
    gap: 0.2rem;
  }

  .trauzeuge-name {
    order: 1; /* Name oben */
  }

  .trauzeugen-text {
    text-align: left;
    display: contents; /* sorgt dafür, dass Name und Kontakt Grid-Items werden */
  }

  .trauzeugen-image {
    order: 2; /* Bild mittig */
    margin: 1rem 0;
  }

  .trauzeuge-kontakt {
    order: 3; /* Kontakt unten */
  }
}

a {
  color: inherit;          // gleiche Farbe wie normaler Text
  text-decoration: none;   // kein Unterstrich
  cursor: default;         // Standard-Cursor
}

a:hover {
  color: $waldgruen-color;
  cursor: pointer;         // beim Hover erscheint Zeiger
}

.emoji {
  filter: grayscale(100%);
  margin-right: 0.5rem;
}
</style>