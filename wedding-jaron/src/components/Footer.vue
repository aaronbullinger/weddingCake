<template>
  <footer class="footer">
    <div class="footer-sections">
      <div class="footer-section">
        <p><span class="footer-emoji">📍</span> Steinbachhof, Vaihingen an der Enz</p>
        <p><span class="footer-emoji">📞</span> Sophie – 0123 / 456789</p>
        <p><span class="footer-emoji">📞</span> Marcel – 0123 / 456789</p>
      </div>

      <div class="footer-section">
        <p><a href="#">Rückmeldung</a></p>
        <p><a href="#">Location</a></p>
        <p><a href="#">Unterkunft</a></p>
        <p><a href="#">Details</a></p>
        <p><a href="#">FAQ</a></p>
      </div>

      <div class="footer-section">
        <p><a href="#">Impressum</a></p>
        <p><a href="#">Datenschutz</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 JaAron – Powered by Late Nights &amp; guter Pasta.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
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
  padding: 5rem 5rem 5rem 5rem;
}

.footer-emoji {
  display: inline-block;
  width: 1.5rem;
  text-align: start;
}

.footer-sections {
  display: flex;
  flex-wrap: nowrap; // lässt sie in einer Zeile bleiben
  justify-content: space-between;
  gap: 3rem; // vorher 7rem
  width: 75vw;
  margin: 0 auto;
  overflow-x: auto;
}

.footer-section {
  flex: 1; // teilt den Platz fair auf
  min-width: 12rem;
  max-width: 25rem;
  border-top: 1px solid $salbei-color;
}

.footer-section p,
.footer-section a {
  color: $salbei-color;
  margin: 0.3rem 0;
  text-decoration: none;
  text-align: left;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  width: 100%;
  justify-content: center;
  z-index: 100;
  font-size: 0.8rem;
  color: $espresso-color;
  text-align: center;
  background-color: $waldgruen-color;
  padding-top: 5rem;
}

p {
  font-size: 0.7rem;
  line-height: 1rem;
}
</style>