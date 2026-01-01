
<template>
  <footer class="footer">
    <div class="footer-sections">
      <div class="footer-section">
        <p class="location"><span class="footer-emoji"><i><font-awesome-icon icon="location-dot" /></i></span> <span>Steinbachhof, <br>Vaihingen an der Enz</span></p>
        <p><span class="footer-emoji"><i><font-awesome-icon icon="phone" /></i></span> Sophie +49 176 61147105</p>
        <p><span class="footer-emoji"><i><font-awesome-icon icon="phone" /></i></span> Marcel +49 173 6371692</p>
      </div>

      <div class="footer-section">
        <p><RouterLink to="/rueckmeldung">Rückmeldung</RouterLink></p>
        <p><RouterLink to="/location">Location</RouterLink></p>
        <p><RouterLink to="/unterkunft">Unterkunft</RouterLink></p>
        <p v-if="isVisible"><RouterLink to="/details">Details</RouterLink></p>
        <p v-if="isVisible"><RouterLink to="/faq">FAQ</RouterLink></p>
      </div>

      <div class="footer-section">
        <p><RouterLink to="/impressum">Impressum</RouterLink></p>
        <p><RouterLink to="/datenschutz">Datenschutz</RouterLink></p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 JaAron – Powered by Late Nights &amp; guter Pasta</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const isVisible = false;
</script>

<style lang="scss" scoped>
  .location {
    display: flex;
    flex-direction: row;
    text-align: left;
  }
  .i {
    color: white;
    border: none;
    //height: auto;
    width: 2rem;
  }
.footer {
  background-color: $waldgruen-color;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  font-family: Helvetica, sans-serif;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: 5rem;
  padding: 3rem 1.5rem;

  // Desktop
  @media (min-width: 769px) {
    padding: 5rem 5rem;
  }
}

.footer-emoji {
  display: inline-block;
  width: 1.5rem;
  text-align: start;
}

.footer-sections {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  // Mobile: Stapeln der Sektionen vertikal
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  // Desktop
  @media (min-width: 769px) {
    flex-wrap: nowrap;
    gap: 3rem;
    width: 75vw;
  }
}

.footer-section {
  flex: 1;
  border-top: 1px solid $salbei-color;
  padding-top: 1rem;

  // Mobile
  @media (max-width: 768px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }

  // Desktop
  @media (min-width: 769px) {
    min-width: 12rem;
    max-width: 25rem;
  }
}

.footer-section p,
.footer-section a {
  color: $salbei-color;
  margin: 0.1rem 0; // Reduziert von 0.3rem auf 0.1rem
  text-decoration: none;
  text-align: left;

  // Mobile: Größerer Touch-Target für Links
  @media (max-width: 768px) {
    padding: 0.1rem 0; // Reduziert von 0.2rem auf 0.1rem
    font-size: 0.8rem;
  }
}

.footer-section a:hover,
.footer-section a:focus {
  text-decoration: underline;
}

// Mobile: Bessere Touch-Targets
@media (max-width: 768px) {
  .footer-section a {
    display: inline-block;
    min-height: 2rem; // Reduziert von 2.5rem auf 2rem
    line-height: 2rem; // Reduziert von 2.5rem auf 2rem
    padding: 0;
  }
}

.footer-bottom {
  width: 100%;
  justify-content: center;
  z-index: 100;
  font-size: 0.8rem;
  color: $espresso-color;
  text-align: center;
  background-color: $waldgruen-color;
  padding-top: 3rem;

  // Mobile
  @media (max-width: 768px) {
    padding-top: 2rem;
    font-size: 0.7rem;
    line-height: 1.2;
  }

  // Desktop
  @media (min-width: 769px) {
    padding-top: 5rem;
  }
}

p {
  font-size: 0.7rem;
  line-height: 1rem;

  // Mobile: Etwas größere Schrift für bessere Lesbarkeit
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
}
</style>