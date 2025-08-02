<template>
  <main>
    <InfoBox />
    <Formular />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/rueckmeldung/InfoBox.vue';
import Formular from '@/components/rueckmeldung/Formular.vue';
import AbschlussText from "@/components/rueckmeldung/AbschlussText.vue";

export default {
  name: 'Rueckmeldung',
  components: {
    AbschlussText,
    InfoBox,
    Formular
  }
};
</script>

<style lang="scss" scoped>
.formular {
  max-width: 37.5rem;
  margin: 2rem auto;
  font-family: sans-serif;
}

h2 {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input,
textarea {
  border: 0.625rem solid #999;
  border-radius: 0.125rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  width: 100%;
}

input[type="radio"] {
  margin-right: 0.5rem;
}

textarea {
  resize: vertical;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 2rem;
  background-color: #777;
  color: white;
  border: none;
  border-radius: 1.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>