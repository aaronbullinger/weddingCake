<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownSalbei.svg" alt="Pfeil runter"/>
    </div>
    <div class="description">
      <p>Trage in das folgende Formular deine entsprechenden Angaben ein.</p>
    </div>

    <form class="formular" @submit.prevent="handleSubmit">
      <!-- Personen -->
      <section>
        <h2>Personen</h2>
        <div class="personen">
          <div class="row">
            <div class="input-group">
              <input v-model="form.name1" placeholder="" />
              <label class="input-label">Name 1</label>
            </div>
            <div class="input-group">
              <input v-model="form.name2" placeholder="" />
              <label class="input-label">Name 2</label>
            </div>
          </div>
          <div class="row">
            <div class="input-group">
              <input v-model="form.kind1" placeholder="" />
              <label class="input-label">Kind 1</label>
            </div>
            <div class="input-group">
              <input v-model="form.kind2" placeholder="" />
              <label class="input-label">Kind 2</label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Speisen</h2>
        <div class="speisen">
          <div :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select id="speise1" :disabled="!form.name1" v-model="form.speise1">
              <option disabled value="">Speisen</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <label for="speise1">{{ form.name1 ? form.name1 : 'Name 1' }}</label>
          </div>
          <div :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select id="speise2" :disabled="!form.name2" v-model="form.speise2">
              <option disabled value="">Speisen</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <label for="speise2">{{ form.name2 ? form.name2 : 'Name 2' }}</label>
          </div>
          <div :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select id="speise3" :disabled="!form.kind1" v-model="form.speise3">
              <option disabled value="">Speisen</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <label for="speise3">{{ form.kind1 ? form.kind1 : 'Kind 1' }}</label>
          </div>
          <div :style="{ color: !form.kind2 ? '#bbb' : 'inherit' }">
            <select id="speise4" :disabled="!form.kind2" v-model="form.speise4">
              <option disabled value="">Speisen</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <label for="speise4">{{ form.kind2 ? form.kind2 : 'Kind 2' }}</label>
          </div>
        </div>

        <div class="allergien">
          <input v-model="form.allergien" />
          <label class="allergien-label" for="allergien">Allergien</label>
        </div>

      </section>

      <section>
        <h2>Übernachtung</h2>
        <div class="uebernachtung">
          <select  v-model="form.uebernachtung">
            <option disabled value="">Übernachtung</option>
            <option value="Zuhause">Übernachtung zu Hause</option>
            <option value="Camping">Campen vor Ort</option>
            <option value="Hotel">Übernachtung im Hotel (Bitte selbst reservieren)</option>
          </select>
        </div>
      </section>

      <!-- Nachricht -->
      <section>
        <div class="nachricht">
          <label>Möchtest Du uns noch was anderes Wissen lassen?</label>
          <textarea v-model="form.nachricht" rows="4"></textarea>
        </div>
      </section>

      <!-- Submit -->
      <button type="submit">Absenden</button>
    </form>
  </div>
</template>

<script lang="ts">
import emailjs from 'emailjs-com';

export default {
  name: 'Formular',
  data() {
    return {
      form: {
        name1: '',
        name2: '',
        kind1: '',
        kind2: '',
        speise1: '',
        speise2: '',
        speise3: '',
        speise4: '',
        allergien: '',
        uebernachtung: '',
        nachricht: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await emailjs.send(
            'service_vu49gyp',
            'template_oo2pmd6',
            {
              to_email: 'aaron.bullinger@gmail.com, jasminberthold@gmx.net',
              subject: 'Hochzeitsrückmeldung von ' + this.form.name1 + '!',
              name1: this.form.name1 || 'N/A',
              name2: this.form.name2 || 'N/A',
              kind1: this.form.kind1 || 'N/A',
              kind2: this.form.kind2 || 'N/A',
              speise1: this.form.speise1 || 'N/A',
              speise2: this.form.speise2 || 'N/A',
              speise3: this.form.speise3 || 'N/A',
              speise4: this.form.speise4 || 'N/A',
              allergien: this.form.allergien || 'N/A',
              uebernachtung: this.form.uebernachtung || 'N/A',
              nachricht: this.form.nachricht || 'N/A'
            },
            'RObaLTYxAiY3dEU00'
        );
        alert('Formular erfolgreich versendet!');
      } catch (error) {
        alert('Fehler beim Versenden.');
        console.error(error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.background-card {
  // Mobile - Vollbreite mit perfekter Zentrierung
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 2rem 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
}

.description {
  // Mobile description
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
}

.formular {
  max-width: 37.5rem;
  margin: 2rem auto;
  font-family: sans-serif;

  // Mobile formular
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    margin: 0.5rem auto;
  }
}

p {
  color: $sandstein-color;
  font-size: 0.9rem;
  margin-bottom: 5rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 2rem;
  }
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  font-family: Kefa, serif;
  color: $sandstein-color;

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 1.5rem 0 0.8rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin: 1rem 0 0.6rem 0;
  }
}

.personen .row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 1rem;

  // Mobile - Stack vertically
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
}

.personen .row:last-child {
  padding-bottom: 0;
}

.personen .input-group {
  flex: 1 1 0;
}

.personen .input-label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
}

.personen .input-group input {
  width: 100%;
}

.speisen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-bottom: 1rem;

  // Mobile - Single column
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
}

.speisen label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;
  color: $sandstein-color;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
}

.allergien-label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
}

.uebernachtung {
  margin-bottom: 2rem;

  // Mobile
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
}

.nachricht label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-left: 0;
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
}

// Mobile input styling
input, select, textarea {
  // Mobile
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
}

textarea {
  resize: vertical;

  // Mobile
  @media (max-width: 768px) {
    min-height: 3rem;
  }
}

button {
  display: block;
  margin: 2rem auto 5rem auto;

  // Mobile
  @media (max-width: 768px) {
    margin: 1.5rem auto 3rem auto;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin: 1rem auto 2rem auto;
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem;
  }
}
</style>
