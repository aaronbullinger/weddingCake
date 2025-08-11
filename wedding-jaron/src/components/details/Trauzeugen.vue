<template>
  <div class="trauzeugen">
    <div class="trauzeuge">
      <img src="@/assets/Zopfel.jpg" alt="Zopfel" class="trauzeugen-image">
      <div class="trauzeugen-text">
        <p>Sophie aka Zopfel</p>
        <p><span class="emoji">📞</span>+49 176 61147105</p>
        <p><span class="emoji">✉️</span>️sophie.victoria@gmx.de</p>
      </div>
    </div>

    <div class="trauzeuge">
      <img src="@/assets/Celmo.png" alt="Celmo" class="trauzeugen-image">
      <div class="trauzeugen-text">
        <p>Marcel aka Celmo</p>
        <p><span class="emoji">📞</span>+49 174 9160164</p>
        <p><span class="emoji">✉️</span>️marcel.falke@gmx.net</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Trauzeugen',
};
</script>

<style scoped lang="scss">
.trauzeugen {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  width: 75vw;
  max-width: 100%;
  margin: 3rem auto 0;
  flex-wrap: wrap;
}

.trauzeuge {
  display: flex;
  align-items: center;
}

.trauzeugen-image {
  width: 11rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-right: 2rem;
}

.trauzeugen-text {
  text-align: left;
}

.trauzeugen-text p {
  margin: 0.2rem 0;
  color: $espresso-color;
  font-family: Helvetica, sans-serif;
}

.emoji {
  filter: grayscale(100%);
  margin-right: 0.5rem;
}
</style>