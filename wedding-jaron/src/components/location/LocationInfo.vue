<template>
  <div class="background-card">
    <div class="arrow-down">
      <img src="@/assets/arrowDownBrown.svg" alt="Pfeil runter"/>
    </div>

    <div class="description">
      <div class="description-block">
          <div class="text-container">
            <h3 class="second-headline">Feiern auf dem Weingut Steinbachhof</h3>
            <h4 class="second-header">Eine Location mit besonderem Ambiente</h4>
            <p>
              Wein. Wald. Wohlfühlen.
              Dieses Motto des Naturparks Strombergs spüren Sie bereits bei der Anfahrt zum Steinbachhof.
              <br>
              Unweit von Stuttgart lassen Sie die Hektik des Alltags hinter sich und finden bei uns eine Insel
              der Ruhe und Erholung, eingebettet in sanfte Hügel mit weiten Ausblicken.
            </p>
          </div>
          <div class="camping-map">
            <iframe class="google-maps"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.40386439827!2d8.960192766641338!3d49.00014218683695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977f4711ec8e97%3A0xf75ad920a6e87d84!2sWeingut%20Steinbachhof%20und%20Steinbachhof%20Event-GmbH!5e0!3m2!1sde!2sde!4v1754946967723!5m2!1sde!2sde"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div class="contact-info">
          <i><font-awesome-icon icon="location-dot" /></i>
          <div class="address">
            <p>Steinbachhof Event - GmbH</p>
            <p>Hofgut Steinbachhof 1</p>
            <p>71665 Vaihingen/Enz</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LocationInfo'
};
</script>

<style scoped lang="scss">
.i {
  color: $espresso-color;
}

.background-card {
  background-color: $nebelblau-color;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 100%;
  max-width: 60vw;
  margin: 7rem 0 5rem 0;
  text-align: left;
}

.second-headline {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
}

.second-header {
  font-size: 1.25rem;
  font-weight: 500;
  margin: -1.5rem 0 2rem 0;
}

.description-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 75vw;
  margin: 3rem auto 0;
  gap: 2rem;
}

.text-container {
  flex: 0 0 45%;
  max-width: 100%;
}

.text-container p {
  color: $espresso-color;
  text-align: left;
  margin-top: 0;
}

.camping-map {
  flex: 0 0 50%;
  aspect-ratio: 1 / 1; // Map skaliert quadratisch / 16:9
  overflow: hidden;
}

.google-maps {
  width: 100%;
  height: 100%;
  border: 0;
}

.contact-info {
  flex: 0 0 45%;
  display: flex;
  align-self: flex-end;
  gap: 0.5rem;
  border-top: 1.5px solid $sandstein-color;
  padding-top: 1rem;
  //margin-top: -15rem;
}

.pin-column {
  width: 1rem;
  text-align: center;
}

.emoji {
  font-size: 1rem;
  line-height: 1.4;
}

.address {
  color: $sandstein-color;
  font-size: 0.9rem;
  line-height: 1.4;

  p {
    margin: 0;
  }
}
// Tablet
 @media (max-width: 1024px) and (min-width: 769px) {
      .description-block {
        max-width: 90vw;
      }
  }
// ================================
// Mobile Responsive Design
// ================================
@media (max-width: 768px) {
  .description {
    max-width: 90vw;
    margin: 4rem 0 3rem 0;
    padding: 0 1rem;
  }

  .description h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  .description h4 {
    font-size: 1.1rem;
    text-align: center;
  }

  .description-block {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .text-container {
    order: 1;
    width: 100%;       // volle Breite
    max-width: 100%;   // keine Einschränkung
    text-align: left;  // optional, wenn du linksbündig willst, sonst center
    padding: 0 1rem;   // optional, etwas Innenabstand
  }

  .text-container p {
    font-size: 0.9rem;
    text-align: left; 
  }

  .camping-map {
    order: 2;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }

  .contact-info {
    order: 3;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .address {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .description {
    max-width: 95vw;
    margin: 3rem 0 2rem 0;
    padding: 0 0.5rem;
  }

  .description h3 {
    font-size: 1.3rem;
  }

  .description h4 {
    font-size: 1rem;
  }

  .text-container p {
    font-size: 0.85rem;

    br {
      display: none;
    }
  }

  .camping-map {
    max-width: 20rem;
    height: 20rem;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .pin-column {
    width: auto;
  }

  .address {
    font-size: 0.8rem;
  }
}
</style>