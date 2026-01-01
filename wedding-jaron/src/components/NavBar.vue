<template>
  <header class="navbar">
    <div class="navbar-content">
      <!-- Logo --> 
       <div class="homebutton"> 
        <RouterLink to="/home">JaAron</RouterLink>
      </div>

      <!-- Hamburger Menu Button (nur auf mobilen und Tablet-Geräten sichtbar) -->
      <button class="hamburger-menu" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <RouterLink to="/rueckmeldung">Rückmeldung</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
        <RouterLink to="/unterkunft">Unterkunft</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
        <RouterLink v-if="isVisible" to="/faq">FAQ</RouterLink>
        <RouterLink v-if="isVisible" to="/photoGallery">Photo</RouterLink>
      </nav>

      <!-- Mobile/Tablet Fullscreen Menu -->
      <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
        <button class="close-button" @click="closeMobileMenu">✕</button>
        <nav class="mobile-nav-links">
          <RouterLink to="/rueckmeldung" @click="closeMobileMenu">Rückmeldung</RouterLink>
          <RouterLink to="/location" @click="closeMobileMenu">Location</RouterLink>
          <RouterLink to="/unterkunft" @click="closeMobileMenu">Unterkunft</RouterLink>
          <RouterLink to="/details" @click="closeMobileMenu">Details</RouterLink>
          <RouterLink v-if="isVisible" to="/faq" @click="closeMobileMenu">FAQ</RouterLink>
          <RouterLink v-if="isVisible" to="/photoGallery" @click="closeMobileMenu">Photo</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = false
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
  .nav-links, .mobile-menu, .mobile-nav-links {
    font-family: 'Helvetica', sans-serif;
  }

/* Grundlegende Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  z-index: 1000;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.1);
}

.navbar-content {
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  position: relative;
}

.homebutton { 
  font-size: 2.5rem; 
  font-weight: bold; 
  color: $waldgruen-color; 
  display: flex; 
  align-items: center; 
  z-index: 1002; } 
  
  .homebutton a { 
    text-decoration: none; 
    color: inherit; 
  }

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
  color: $salbei-color;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;

    &.router-link-active {
      color: $waldgruen-color;
    }
  }
}

/* Hamburger Button */
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  span {
    width: 1.5rem;
    height: 0.2rem;
    background: $waldgruen-color;
    border-radius: 2px;
    transition: all 0.3s;
  }

  &.active span:first-child {
    transform: rotate(45deg) translate(5px,5px);
  }
  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px,-5px);
  }
}

/* Mobile/Tablet Fullscreen Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $waldgruen-color;
  display: none; /* Standard: nur mobil/tablet sichtbar */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1001;

  &.active {
    transform: translateY(0);
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #fff;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #cce0c0;
      }
    }
  }
}

/* Desktop: Hamburger & Mobile Menü ausblenden */
@media (min-width: 1025px) {
  .hamburger-menu, .mobile-menu {
    display: none;
  }
}

/* Tablet & Mobile: Hamburger & Fullscreen-Menü aktiv */
@media (max-width: 1024px) {
  .hamburger-menu {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
  .nav-links {
    display: none; /* Desktop-Menü ausblenden */
  }
}
</style>