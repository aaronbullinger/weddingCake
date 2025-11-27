
<template>
  <header class="navbar">
    <div class="navbar-content">
      <!-- Logo -->
      <div class="homebutton">
        <RouterLink to="/home">JaAron</RouterLink>
      </div>

      <!-- Hamburger Menu Button (nur auf mobilen Geräten sichtbar) -->
      <button class="hamburger-menu" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation -->
      <nav class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <RouterLink to="/rueckmeldung" @click="closeMobileMenu">Rückmeldung</RouterLink>
        <RouterLink to="/location" @click="closeMobileMenu">Location</RouterLink>
        <RouterLink v-if="isVisible" to="/unterkunft" @click="closeMobileMenu">Unterkunft</RouterLink>
        <RouterLink v-if="isVisible" to="/details" @click="closeMobileMenu">Details</RouterLink>
        <RouterLink v-if="isVisible" to="/faq" @click="closeMobileMenu">FAQ</RouterLink>
        <RouterLink v-if="isVisible" to="/photoGallery" @click="closeMobileMenu">Photo</RouterLink>
      </nav>

      <!-- Overlay für mobile Navigation -->
      <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = false;
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-content {
  max-width: 75vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  box-sizing: border-box;
  position: relative;
}

.homebutton {
  font-size: 2.5rem;
  font-weight: bold;
  color: $waldgruen-color;
  display: flex;
  align-items: center;
  z-index: 1001;
}

.homebutton a {
  text-decoration: none;
  color: inherit;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 2rem;
    height: 0.25rem;
    background: $waldgruen-color;
    border-radius: 0.125rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  &.active {
    span:first-child {
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
  color: $salbei-color;
}

.nav-links a {
  display: flex;
  align-items: center;
  color: $salbei-color;
  text-decoration: none;
  padding: 0 0.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links .router-link-active {
  color: $waldgruen-color;
}

.mobile-overlay {
  display: none;
}

// Mobile Styles
@media (max-width: 768px) {
  .navbar-content {
    max-width: 95vw;
    padding: 0 1rem;
  }

  .homebutton {
    font-size: 2rem;
  }

  .hamburger-menu {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70vw;
    height: 100vh;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -0.25rem 0 0.5rem rgba(0, 0, 0, 0.1);

    &.mobile-open {
      right: 0;
    }

    a {
      font-size: 1.25rem;
      padding: 1rem;
      width: 80%;
      text-align: center;
      border-radius: 0.5rem;
      transition: all 0.3s ease;

      &:hover {
        background: rgba($waldgruen-color, 0.1);
        color: $waldgruen-color;
      }
    }
  }

  .mobile-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
}

// Tablet Styles
@media (max-width: 1024px) and (min-width: 769px) {
  .navbar-content {
    max-width: 90vw;
  }

  .nav-links {
    gap: 1.5rem;

    a {
      font-size: 1rem;
      padding: 0 0.25rem;
    }
  }
}

// Sehr kleine Bildschirme
@media (max-width: 480px) {
  .navbar-content {
    height: 4rem;
  }

  .homebutton {
    font-size: 1.75rem;
  }

  .hamburger-menu {
    width: 1.5rem;
    height: 1.5rem;

    span {
      width: 1.5rem;
      height: 0.2rem;
    }
  }

  .nav-links {
    width: 80vw;
    gap: 2.5rem;

    a {
      font-size: 1.1rem;
    }
  }
}
</style>