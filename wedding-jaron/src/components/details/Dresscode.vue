<template>
    <div class="info-box">
      <div class="info-text">
        <h2 class="subtitle">Dresscode</h2>
        <p class="p-block">
          Ob Leinenhemd, Sommerkleid oder das kleine Schwarze – Hauptsache, du fühlst dich wohl!<br />
          Unser Farbschema ist <strong>grünlich</strong> oder <strong>bläulich</strong>, aber kein Muss. <br />
          Wir freuen uns auf euren individuellen Stil – festlich, bequem, gerne tanzbar.
        </p>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Dresscode'
}
</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75vw;
  width: 100%;
  margin: 0 auto;
  margin-top: 7.5rem;
  box-sizing: border-box;
  flex-direction: column;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  color: $nebelblau-color;
}

.p-block {
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  text-align: left;
  max-width: 35vw;
}
</style>