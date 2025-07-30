<template>
  <main>
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
              <option value="Camping">Ich/wir campen vor Ort</option>
              <option value="Hotel">Ich/Wir hätten gerne einen Hotelplatz (bitte reservieren).</option>
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
  </main>
</template>

<script lang="ts">
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
        dropdowns: ['', '', '', ''],
        allergien: '',
        uebernachtung: '',
        nachricht: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Formulardaten:', this.form, this.personen);
    }
  }
};
</script>

<style scoped lang="scss">
main {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.formular {
  flex-direction: column;
  align-items: start;
  text-align: left;
  justify-content: center;
  margin-left: 5%;
  margin-right: 48vh;
  font-family: Helvetica, sans-serif;
  color: $gravelgrau-color;
}

h2 {
  font-size:  2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  font-family: Kefa, serif;
}

.personen .row,
.personen .input-group,
.speisen,
.allergien,
.uebernachtung,
.nachricht {
  max-width: 70vh;
}

.personen .row{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 1rem;
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
}

.speisen label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;
}

.allergien-label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;
}

.uebernachtung {
  margin-bottom: 2rem;
}

.nachricht label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;
}

input,
textarea,
select{
  box-sizing: border-box;
  border: 1px solid $gravelgrau-color;
  border-radius: 40px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  width: 100%;
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
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

input:focus,
textarea:focus {
  border-color: $gravelgrau-color;
  outline: none;
  background-color: #f1f1f1;
}
</style>