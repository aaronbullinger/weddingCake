<template>
  <div class="info-box">
    <div class="info-text">

      <h2>
        <span class="highlight">Datenschutz </span><br>
        So schützen wir deine Infos auf unserer Hochzeitsseite
      </h2>
    </div>
  </div>
   <section class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
    >
      <button
        class="accordion-header"
        :class="{ open: activeIndex === index }"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <span class="arrow">
          <i class="fas fa-chevron-right"></i>
        </span>
      </button>

      <div
        class="accordion-content"
        v-show="activeIndex === index"
      >
        <p v-html="item.content"></p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Content',

  data() {
    return {
      activeIndex: 0, // erstes Element standardmäßig offen
      items: [
        {
          title: 'WER STECKT HINTER DIESER SEITE?',
          content: `
            <p>
              Aaron Bullinger<br />
              Jasmin Berthold<br />
              Bahnhofstraße 2<br />
              73265 Dettingen unter Teck<br />
              E-Mail: berthold.jasmin@gmx.net
            </p>
            <p>
              Diese Website ist rein privat und dient unserer Hochzeitsfeier.
              Kein kommerzieller Hintergrund – nur Liebe, Planung und Freude.
            </p>
          `
        },
        {
          title: 'WELCHE DATEN WIR SAMMELN',
          content: `
            <p>Damit die Seite läuft, speichert <strong>Netlify</strong>:</p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit deines Besuchs</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Speicherdauer: <strong>1 Jahr</strong>, danach werden die Daten gelöscht.
            </p>
          `
        },
        {
          title: 'FORMULARE / RSVP',
          content: `
            <p>
              Daten aus Zusagen oder Absagen nutzen wir ausschließlich
              für unsere Hochzeitsplanung.
            </p>
            <p>
              Speicherdauer: <strong>1 Jahr</strong>
            </p>
          `
        },
        {
          title: 'COOKIES',
          content: `
            <p>
              Unsere Website kommt ohne Tracking-Cookies aus.
              Nur technisch notwendige Cookies von Netlify werden verwendet.
            </p>
          `
        },
        {
          title: 'EINGEBETTETE INHALTE',
          content: `
            <ul>
              <li>Google Fonts</li>
              <li>YouTube</li>
              <li>Google Maps</li>
            </ul>
            <p>
              Dabei kann deine IP-Adresse an Drittanbieter übertragen werden.
            </p>
          `
        },
        {
          title: 'HOSTING',
          content: `
            <p>
              Netlify, Inc.<br />
              2325 3rd Street, Suite 296<br />
              San Francisco, CA 94107, USA<br />
              <a href="https://www.netlify.com" target="_blank">www.netlify.com</a>
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
            </p>
          `
        },
        {
          title: 'DEINE RECHTE',
          content: `
            <ul>
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch</li>
              <li>Widerruf erteilter Einwilligungen</li>
            </ul>
            <p>
              Kontaktiere uns jederzeit per E-Mail.
            </p>
          `
        },
        {
          title: 'SPEICHERDAUER',
          content: `
            <ul>
              <li>Server-Logfiles: 1 Jahr</li>
              <li>Formulardaten: 1 Jahr nach der Hochzeit</li>
            </ul>
          `
        }
      ]
    };
  },

  methods: {
    toggle(index: number) {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    }
  }
};
</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 75vw;
  width: 100%;
  margin: 0 auto;
  gap: 3.7rem;
  box-sizing: border-box;

  // Tablet
  @media (max-width: 1024px) and (min-width: 769px) {
    max-width: 90vw;
    gap: 2rem;
    flex-direction: row;
    text-align: center;
    padding-top: 3rem;
  }

  // Mobile
  @media (max-width: 768px) {
    max-width: 95vw;
    gap: 1.5rem;
    flex-direction: row;
    padding: 0 1rem;
    padding-top: 1rem;
    box-sizing: border-box;
  }

  // Small Mobile
  @media (max-width: 480px) {
    max-width: 95vw;
    gap: 0.5rem;
    padding: 0 1rem;
    flex-direction: row;
    margin: 0 auto;
    box-sizing: border-box;
  }
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 25rem;
  margin-right: 0;

  // Tablet
  @media (max-width: 1024px) {
    justify-content: center;
    height: 20rem;
    order: -1;
  }

  // Mobile
  @media (max-width: 768px) {
    justify-content: center;
    height: 15rem;
    margin: 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    justify-content: flex-start;
    height: 12rem;
  }
}

.info-image img {
  width: 9rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 3rem;
  margin-right: 5rem;

  // Tablet
  @media (max-width: 1024px) {
    width: 8rem;
    height: 20rem;
    margin: 0;
    border-radius: 4rem;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 6rem;
    height: 15rem;
    border-radius: 3rem;
    margin-right: 0;
  }

  // Small Mobile
  @media (max-width: 480px) {
    width: 5rem;
    height: 12rem;
    border-radius: 2.5rem;
    margin-right: 0;
  }
}

.info-text {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;

  // Tablet
  @media (max-width: 1024px) {
    text-align: left;
    max-width: 100%;
  }

  // Mobile
  @media (max-width: 768px) {
    text-align: left;
  }

  // Small Mobile
  @media (max-width: 480px) {
    text-align: left;
  }
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  line-height: 1.2;
  font-weight: 400;
  color: $nebelblau-color;

  // Tablet
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
}

.info-text h2 .highlight {
  color: $espresso-color;
  font-weight: bold;
}

.info-text p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: $espresso-color;
  font-family: Helvetica, sans-serif;
  margin-bottom: 0.9rem;

  // Mobile
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-bottom: 0.6rem;
  }
}

.accordion {
  border-top: 1px solid $espresso-color;
  width: 75vw; // gleiche Breite wie .info-text
  margin: 0 auto; // zentriert
  margin-top: 2rem;
}

.accordion-item {
  border-bottom: 1px solid $espresso-color;
}

.accordion-header {
  width: 100%;
  padding: 1.2rem 0;
  margin: 0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;

  font-family: Helvetica, sans-serif; // gleiche Schrift wie info-text
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: left;
  color: $espresso-color;

  -webkit-tap-highlight-color: transparent; // iOS Highlight entfernen
  outline: none;
}

.accordion-header .arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.accordion-header.open .arrow {
  transform: rotate(90deg);
}

.accordion-content {
  padding: 1rem 0 1.5rem 0;
  margin: 0 1.2rem;
  font-family: Helvetica, sans-serif; // gleiche Schrift wie info-text
  font-size: 0.9rem;
  line-height: 1.6;
  color: #3f2a1d;
  text-align: left; // fixiert linksbündig
}

/* Fokus / Klick / Active komplett neutralisieren */
.accordion-header:focus,
.accordion-header:focus-visible,
.accordion-header:active {
  outline: none;
  box-shadow: none;
  background: none;
}

.arrow  {
  font-size: 1.25rem;
  margin-right: 2rem;
}
</style>