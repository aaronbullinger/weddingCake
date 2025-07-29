<template>
  <div id="app">
    <header class="navbar">
      <!-- Logo -->
      <div class="homebutton">
        <RouterLink to="/">JaAron</RouterLink>
      </div>

      <!-- Navigation -->
      <nav class="nav-links">
        <RouterLink to="/rueckmeldung">Rückmeldung</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
        <RouterLink to="/unterkunft">Unterkunft</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
      </nav>
    </header>

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
         <img src="./assets/safeOurDateImg1.png" alt="Bild 1">
          <span class="date-number">26</span>
        </div>
        <div class="date-item">
          <img src="./assets/safeOurDateImg2.png" alt="Bild 1">
          <span class="date-number">05</span>
        </div>
        <div class="date-item">
          <img src="./assets/safeOurDateImg3.png" alt="Bild 1">
          <span class="date-number">26</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  padding: 0.5rem 0.5rem 1rem 0.5rem;
}

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  z-index: 1000;
}

.homebutton {
  color: #3B5D47;
  font-size: 40px;
  font-weight: bold;
  padding-left: 5%;
}

.homebutton a {
  text-decoration: none;
  color: inherit;
}

.nav-links {
  display: flex;
  gap: 40px;
  padding-right: 15%;
  padding-top: 10px;
  font-size: 20px;
  color: #707070;
  text-decoration: none;
}

.nav-links a {
  color: #707070;
  text-decoration: none;
}

.nav-links a .router-link-active {
  font-weight: bold;
  color: black;
}

.save-date-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
}

.save-text {
  font-family: Kefa, serif;
  font-size: 33px;
  color: #3B5D47;
  line-height: 1.2;
  margin: 0 20px 0 5%;
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
  color: rgba(120, 160, 180, 0.8); /* leichtes Blau-Grau */
  pointer-events: none;
}
</style>
