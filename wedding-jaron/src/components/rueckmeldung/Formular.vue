<template>
  <main>
    <form class="formular" @submit.prevent="handleSubmit">
      <!-- Person -->
      <section>
        <h2>Person</h2>
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
        <div class="grid-speisen">
          <label><input type="radio" value="Fleisch" v-model="form.speise" /> Fleisch</label>
          <label><input type="radio" value="Vegetarisch" v-model="form.speise" /> Vegetarisch</label>
          <label><input type="radio" value="Fisch" v-model="form.speise" /> Fisch</label>
          <label><input type="radio" value="Vegan" v-model="form.speise" /> Vegan</label>
        </div>
        <input v-model="form.allergien" placeholder="Allergien" />
      </section>

      <!-- Übernachtung -->
      <section>
        <h2>Übernachtung</h2>
        <div class="column">
          <label><input type="radio" value="Zuhause" v-model="form.uebernachtung" /> Übernachtung zu Hause</label>
          <label><input type="radio" value="Camping" v-model="form.uebernachtung" /> Ich/wir campen vor Ort</label>
          <label><input type="radio" value="Hotel" v-model="form.uebernachtung" /> Ich/Wir hätten gerne einen Hotelplatz (bitte reservieren).</label>
        </div>
      </section>

      <!-- Nachricht -->
      <section>
        <label>Möchtest Du uns noch was anderes Wissen lassen?</label>
        <textarea v-model="form.nachricht" rows="4"></textarea>
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
        speise: '',
        allergien: '',
        uebernachtung: '',
        nachricht: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Formulardaten:', this.form);
      // z.B. POST an API senden
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
  font-family: Kefa, serif;
  color: $gravelgrau-color;
}

h2 {
  font-size:  2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.personen .row{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 4rem;
}

.input-label {
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.9rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.column label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input,
textarea {
  border: 1px solid #999;
  border-radius: 20px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
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