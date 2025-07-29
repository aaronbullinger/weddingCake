<template>
  <!-- Save Our Date Section -->
  <div class="save-date-section">
    <div class="save-text">
      <h1>
        SAVE<br>
        OUR<br>
        DATE
      </h1>
    </div>

    <div class="date-images">
      <div class="date-item">
        <img src="../assets/safeOurDateImg1.png" alt="Bild 1">
        <span class="date-number">26</span>
      </div>
      <div class="date-item">
        <img src="../assets/safeOurDateImg2.png" alt="Bild 1">
        <span class="date-number">05</span>
      </div>
      <div class="date-item">
        <img src="../assets/safeOurDateImg3.png" alt="Bild 1">
        <span class="date-number">26</span>
      </div>
    </div>
  </div>

  <!-- Countdown Timer Section -->
  <div class="countdown-timer">
    <div class="time-box">
      <span>{{ days }}</span>
      <small>Tage</small>
    </div>
    <div class="time-box">
      <span>{{ hours }}</span>
      <small>Stunden</small>
    </div>
    <div class="time-box">
      <span>{{ minutes }}</span>
      <small>Minuten</small>
    </div>
    <div class="time-box">
      <span>{{ seconds }}</span>
      <small>Sekunden</small>
    </div>
  </div>

  <!-- Info Box Section-->
  <div class="info-box">
    <div class="info-image">
      <img src="../assets/homePageInfoImg.png" alt="Paarbild">
    </div>

    <div class="info-text">
      <h2>
        <span class="highlight">Wir feiern nochmal richtig</span><br>
        und das mit Dir!
      </h2>
      <p>
        Mit großer Vorfreude laden wir dich zu unserem ganz besonderen Tag ein.
        <br>
        Am <strong>26.05.26</strong>, ja, das ist ein Dienstag, feiern wir uns –
        mit einer freien Trauung, gutem Essen, Musik und allem, was das Herz berührt.
        Wir freuen uns riesig, diesen unvergesslichen Moment mit dir zu teilen!
      </p>
      <p>
        Auf dieser Homepage findest du alle wichtigen Informationen rund um unsere Hochzeit –
        von Ablauf über Unterkunft bis hin zu Geschenken. Wir halten alles stets aktuell,
        damit du immer bestens informiert bist.
      </p>
      <p>
        Solltest du trotzdem noch Fragen haben, stehen wir – und natürlich auch unsere lieben
        Trauzeuginnen – dir jederzeit gerne zur Verfügung!
      </p>

      <button class="callToAction-button">Mehr erfahren</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {
      targetDate: new Date('2026-05-26T00:00:00'),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const timeDifference = this.targetDate.getTime() - now.getTime();

      if (timeDifference < 0) {
        this.days = this.hours = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style scoped>
.save-date-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
}

.save-text {
  font-family: Kefa, serif;
  font-size: 40px;
  color: #3B5D47;
  line-height: 0.7;
  text-align: left;
}

.date-images {
  display: flex;
  gap: 45px;
}

.date-item {
  position: relative;
  width: 150px;
  height: 400px;
  overflow: hidden;
  border-radius: 100px;
}

.date-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.date-number {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  font-weight: bold;
  color: #7A9EB1; /* leichtes Blau-Grau */
  pointer-events: none;
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 10vw;
  gap: 60px;
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 400px;
}

.info-image img {
  width: 150px;
  height: 400px;
  object-fit: cover;
  border-radius: 100px;
  filter: grayscale(100%);
  margin-top: 10px;
  margin-right: 100px;
}

.info-text {
  flex: 2;
  max-width: 600px;
  text-align: left;
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: 400;
}

.info-text h2 .highlight {
  color: #A8CBB7;
  font-weight: bold;
}

.info-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
}

.callToAction-button {
  background-color: #4A2E23;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-family: "Kefa", serif;
  background-color: #3B5D47;
  width: 100vw;
  margin: 60px calc(-50vw + 50%);
  padding: 20px 0;
}

.time-box {
  text-align: center;
}

.time-box span {
  display: block;
  font-size: 5rem;
  font-weight: bold;
  color: #A8CBB7;
}

.time-box small {
  font-size: 1rem;
  color: #FFFFFF;
}
</style>