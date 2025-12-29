<template>
  <main class="checkerboard-blue">
    <InfoBox />
    <Formular />
    <Checkerboard />
  </main>
</template>

<script lang="ts">
import InfoBox from '@/components/rueckmeldung/InfoBox.vue';
import Formular from '@/components/rueckmeldung/Formular.vue';
import AbschlussText from "@/components/rueckmeldung/AbschlussText.vue";
import Checkerboard from '../components/Checkerboard.vue';

export default {
  name: 'Rueckmeldung',
  components: {
    AbschlussText,
    InfoBox,
    Formular,
    Checkerboard
  }
};
</script>

<style lang="scss" scoped>
main {
  // Mobile main container
  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
}

.formular {
  max-width: 37.5rem;
  margin: 2rem auto;
  font-family: sans-serif;

  // Mobile
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 0.5rem auto;
    padding: 0 0.5rem;
  }
}

h2 {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  // Mobile
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 0.6rem;
  }
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  // Mobile
  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 0.6rem;
  }
}

input,
textarea {
  border: 0.625rem solid #999;
  border-radius: 0.125rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  width: 100%;

  // Mobile
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
}

input[type="radio"] {
  margin-right: 0.5rem;

  // Mobile
  @media (max-width: 480px) {
    margin-right: 0.3rem;
  }
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

  // Mobile
  @media (max-width: 768px) {
    margin-top: 0.8rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.6rem;
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem;
  }
}

button:hover {
  background-color: #555;
}

.checkerboard-blue {
  --cb-above-1: transparent;
  --cb-above-2: #8fa6b6;
  --cb-above-3: transparent;
  --cb-above-4: #8fa6b6;

  --cb-below-1: #8fa6b6;
  --cb-below-2: transparent;
  --cb-below-3: #8fa6b6;
  --cb-below-4: transparent;
}
</style>
