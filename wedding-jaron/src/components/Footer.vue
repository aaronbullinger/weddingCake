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
  flex-wrap: nowrap;
  justify-content: center;
  gap: 7rem;
  width: 100%;
}

.footer-section {
  flex: 0 1 13.75rem;
  max-width: 37.5rem;
  min-width: 18.75rem;
  margin-bottom: 1rem;
  border-top: 0.0625rem solid $salbei-color;
  padding-top: 1rem;
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
</style>