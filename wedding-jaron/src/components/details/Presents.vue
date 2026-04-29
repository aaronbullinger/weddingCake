<template>
    <div class="info-box" id="presents">
      <div class="info-text">
        <h2 class="subtitle">Presents</h2>
        <p class="p-block">
          Das größte Geschenk ist für uns, dass ihr diesen besonderen Tag mit uns feiert. </br>
          Wenn ihr uns zusätzlich eine Freude machen möchtet, freuen wir uns sehr über einen Beitrag zu unserer gemeinsamen Zukunft.
        </p>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Presents'
}
</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  //max-width: 75vw;
  width: 100%;
  margin-top: 5rem;
  box-sizing: border-box;
  flex-direction: column;
  background-color: $salbei-color;;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  color: $waldgruen-color;
}

.p-block {
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  max-width: 35vw;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;

  @Media (max-width: 768px) {
    max-width: 75vw;
  }
}

#present {
   scroll-margin-top: 100px;
}
</style>