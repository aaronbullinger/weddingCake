<template>
  <main>
    <div class="abschluss-text">
      <p>
        Vielen Dank für deine Rückmeldung – wir freuen uns wie Bolle! <br>PS: Wir melden uns rechtzeitig mit allen finalen Infos.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'AbschlussText'
};
</script>

<style lang="scss">
main {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.abschluss-text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  margin-left: 5%;
  font-family: Helvetica, sans-serif;
  color: $espresso-color;
  font-size: 0.9rem;
}

</style>