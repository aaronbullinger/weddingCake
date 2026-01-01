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
              <label>Name 1</label>
            </div>
            <div class="input-group">
              <input v-model="form.name2" placeholder="" />
              <label>Name 2</label>
            </div>
          </div>
          <div class="row">
            <div class="input-group">
              <input v-model="form.kind1" placeholder="" />
              <label>Kind 1</label>
            </div>
            <div class="input-group">
              <input v-model="form.kind2" placeholder="" />
              <label>Kind 2</label>
            </div>
          </div>
        </div>
      </section>

      <!-- Speisen -->
      <section>
        <h2>Speisen</h2>
        <div class="speisen">
          <div class="dropdown-wrapper" :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select
              id="speise1"
              v-model="form.speise1"
              @mousedown="handleDropdownClick('speise1', $event)"
              :class="{ 'disabled-style': !form.name1 }"
            >
              <option disabled value="">Wähle eine Speise</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <i class="dropdown-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></i>
            <label for="speise1">{{ form.name1 ? form.name1 : 'Name 1' }}</label>
          </div>

          <div class="dropdown-wrapper" :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select
              id="speise2"
              v-model="form.speise2"
              @mousedown="handleDropdownClick('speise2', $event)"
              :class="{ 'disabled-style': !form.name2 }"
            >
              <option disabled value="">Wähle eine Speise</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <i class="dropdown-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></i>
            <label for="speise2">{{ form.name2 ? form.name2 : 'Name 2' }}</label>
          </div>

          <div class="dropdown-wrapper" :style="{ color: !form.kind1 ? '#bbb' : 'inherit' }">
            <select
              id="speise3"
              v-model="form.speise3"
              @mousedown="handleDropdownClick('speise3', $event)"
              :class="{ 'disabled-style': !form.kind1 }"
            >
              <option disabled value="">Wähle eine Speise</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <i class="dropdown-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></i>
            <label for="speise3">{{ form.kind1 ? form.kind1 : 'Kind 1' }}</label>
          </div>

          <div class="dropdown-wrapper" :style="{ color: !form.kind2 ? '#bbb' : 'inherit' }">
            <select
              id="speise4"
              v-model="form.speise4"
              @mousedown="handleDropdownClick('speise4', $event)"
              :class="{ 'disabled-style': !form.kind2 }"
            >
              <option disabled value="">Wähle eine Speise</option>
              <option value="Fleisch">Fleisch</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Fisch">Fisch</option>
              <option value="Vegan">Vegan</option>
            </select>
            <i class="dropdown-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></i>
            <label for="speise4">{{ form.kind2 ? form.kind2 : 'Kind 2' }}</label>
          </div>
        </div>

        <div class="allergien">
          <input v-model="form.allergien" id="allergien" />
          <label for="allergien">Allergien</label>
        </div>
      </section>

      <!-- Übernachtung -->
      <section>
        <h2>Übernachtung</h2>
        <div class="uebernachtung">
          <div
            class="dropdown-wrapper"
            :style="{ color: !isAnyNameFilled ? '#bbb' : 'inherit' }"
          >
            <select
              v-model="form.uebernachtung"
              :class="{ 'disabled-style': !isAnyNameFilled }"
              @mousedown="handleDropdownClick('uebernachtung', $event)"
              id="uebernachtung"
            >
              <option disabled value="">Wähle eine Übernachtungsmöglichkeit</option>
              <option value="Zuhause">Übernachtung zu Hause</option>
              <option value="Camping">Campen vor Ort</option>
              <option value="Hotel">Übernachtung im Hotel (Bitte selbst reservieren)</option>
            </select>
            <i class="dropdown-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></i>
            <label for="uebernachtung">Übernachtung</label>
          </div>
        </div>
      </section>

      <!-- Nachricht -->
      <section>
        <div class="nachricht">
          <p class="label-textarea">Möchtest Du uns noch was anderes Wissen lassen?</p>
          <textarea v-model="form.nachricht" rows="4"></textarea>
        </div>
      </section>

      <!-- Submit -->
      <button
        type="submit"
        :class="{ disabled: !isFormValid }"
      >
        Absenden
      </button>
    </form>

    <!-- Pop-up Overlay -->
    <div
      v-if="submitMessage"
      class="overlay"
      @click.self="closePopup"
    >
      <div class="popup" :class="submitStatus">
        <button class="close-btn" @click="closePopup">✖</button>
        <p>{{ submitMessage }}</p>
      </div>
    </div>
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
      },
      submitStatus: '' as 'success' | 'error' | '',
      submitMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.isFormValid) {
        this.submitStatus = 'error';
        this.submitMessage = 'Oh Oh. Es sieht so aus, als hättest du noch nicht alle Felder ausgefüllt.';
        return;
      }

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

        this.submitStatus = 'success';
        this.submitMessage = 'Juhuuu! Wir freuen uns.';
        this.resetForm();
      } catch (error) {
        console.error(error);
        alert('Fehler beim Versenden.');
      }
    },
    resetForm() {
      this.form = {
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
      };
    },
    handleDropdownClick(nameField: keyof typeof this.form, event: MouseEvent) {
      const nameRequiredMap: Record<string, keyof typeof this.form> = {
        speise1: 'name1',
        speise2: 'name2',
        speise3: 'kind1',
        speise4: 'kind2',
        uebernachtung: 'name1', // prüfen wir über isAnyNameFilled
      };
      const requiredField = nameRequiredMap[nameField];

      // Übernachtung: mindestens ein Name
      if (nameField === 'uebernachtung' && !this.isAnyNameFilled) {
        event.preventDefault();
        this.submitStatus = 'error';
        this.submitMessage =
          'Bitte trage zuerst mindestens einen Namen ein, damit wir wissen, für wen die Übernachtung ist.';
        return false;
      }

      // Speisen: spezielles Namensfeld prüfen
      if (['speise1','speise2','speise3','speise4'].includes(nameField) && !this.form[requiredField]) {
        event.preventDefault();
        this.submitStatus = 'error';
        this.submitMessage =
          'Bitte trage zuerst einen Namen für dieses Feld ein, damit wir wissen, für wen die Speise ist.';
        return false;
      }

      return true; // Dropdown öffnet sich normal
    },
    closePopup() {
      this.submitMessage = '';
    }
  },
  watch: {
    submitMessage(val) {
      document.body.style.overflow = val ? 'hidden' : '';
    }
  },
  computed: {
    isFormValid(): boolean {
      if (!this.form.name1) return false;
      if (!this.form.uebernachtung) return false;
      if (this.form.name1 && !this.form.speise1) return false;
      if (this.form.name2 && !this.form.speise2) return false;
      if (this.form.kind1 && !this.form.speise3) return false;
      if (this.form.kind2 && !this.form.speise4) return false;
      return true;
    },
    isAnyNameFilled(): boolean {
      return !!(
        this.form.name1 ||
        this.form.name2 ||
        this.form.kind1 ||
        this.form.kind2
      );
    }
  }
};
</script>

<style scoped lang="scss">
.background-card {
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
  @media (max-width: 768px) { margin-bottom: 3rem; }
  @media (max-width: 480px) { margin-bottom: 2rem; }
}

.formular {
  max-width: 37.5rem;
  margin: 2rem auto;
  font-family: Helvetica, sans-serif;

  @media (max-width: 768px) { max-width: 100%; margin: 1rem auto; }
  @media (max-width: 480px) { margin: 0.5rem auto; }
}

p {
  color: $sandstein-color;
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) { font-size: 0.8rem; margin-bottom: 3rem; }
  @media (max-width: 480px) { font-size: 0.75rem; margin-bottom: 2rem; }
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  font-family: Abril Fatface, serif;
  color: $sandstein-color;

  @media (max-width: 768px) { font-size: 1.6rem; margin: 1.5rem 0 0.8rem 0; }
  @media (max-width: 480px) { font-size: 1.4rem; margin: 1rem 0 0.6rem 0; }
}

/* ----------------------------
   Reihen / Inputs
---------------------------- */
.personen .row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) { flex-direction: column; gap: 0.8rem; }
  @media (max-width: 480px) { gap: 0.6rem; }
}

.personen .row:last-child { padding-bottom: 0; }
.personen .input-group { flex: 1 1 0; }

/* ----------------------------
   Einheitliches Label Styling für Inputs & Dropdowns
---------------------------- */
.input-group label,
.dropdown-wrapper label {
  display: block;
  margin-top: 0.3rem;
  padding-left: 1rem;
  font-size: 0.7rem;
  color: $sandstein-color;
  font-family: inherit;
}

/* Textarea spezielles Label */
.label-textarea {
  font-size: 1rem;
  margin: 3rem 0 1rem 0;
}

/* ----------------------------
   Speisen Grid
---------------------------- */
.speisen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 0.8rem; }
  @media (max-width: 480px) { gap: 0.6rem; }
}

/* ----------------------------
   Übernachtung
---------------------------- */
.uebernachtung {
  font-size: 0.7rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) { margin-bottom: 1.5rem; }
  @media (max-width: 480px) { margin-bottom: 1rem; }
}

/* ----------------------------
   Inputs, Selects, Textarea
---------------------------- */
input,
select,
textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: white;
  outline: none;
  caret-color: white;

  &:focus,
  &:active {
    border-bottom: 1px solid #ccc;
    outline: none;
    box-shadow: none;
    caret-color: white;
  }

  @media (max-width: 768px) { font-size: 0.7rem; padding: 0.5rem 0.8rem; }
  @media (max-width: 480px) { font-size: 0.7rem; padding: 0.4rem 0.6rem; }
}

/* Textarea Extras */
textarea {
  resize: vertical;
  width: 100%;
  padding: 1.5rem 1.25rem;
  border: 1px solid #ccc;

  &:focus {
    border-color: white;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.2);
  }

  @media (max-width: 768px) { min-height: 3rem; padding: 0.5rem 0.6rem; }
  @media (max-width: 480px) { padding: 0.4rem 0.5rem; }
}

/* ----------------------------
   Selects spezielle Anpassungen
---------------------------- */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  padding-right: 2rem; // Platz für Pfeil
}

/* ----------------------------
   Dropdown Wrapper & Icon
---------------------------- */
.dropdown-wrapper {
  position: relative;
  font-size: 0.7rem;
  margin-bottom: 1rem;
}

.dropdown-icon {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  margin: -0.75rem 0.5rem -0.5rem 0rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: white;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    right: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    right: 0.3rem;
  }
}

/* ----------------------------
   Button
---------------------------- */
button {
  display: block;
  margin: 2rem auto 5rem auto;
  text-transform: uppercase;

  @media (max-width: 768px) { margin: 1.5rem auto 3rem auto; padding: 0.5rem 1.5rem; font-size: 0.7rem; }
  @media (max-width: 480px) { margin: 1rem auto 2rem auto; padding: 0.4rem 1.2rem; font-size: 0.8rem; }
}

button.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ----------------------------
   Overlay / Popup
---------------------------- */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba($sandstein-color, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup {
  padding: 5rem 1.5rem 1rem 1.5rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.popup.success { background: $waldgruen-color; }
.popup.error { background: #e58e01; }

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
}

/* ----------------------------
   Animation
---------------------------- */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* ----------------------------
   Disabled Style für Dropdowns
---------------------------- */
.disabled-style {
  color: #bbb;
  cursor: auto;
  pointer-events: auto;
}
</style>
