<template>
  <header class="navbar">
    <div class="navbar-inner">

      <!-- Logo -->
      <a href="#hero" class="navbar-logo">dennis.dev</a>

      <!-- Nav Links Desktop -->
      <nav class="navbar-links" :class="{ 'menu-open': menuOpen }">
        <a href="#about"      @click="closeMenu">About</a>
        <a href="#skills"     @click="closeMenu">Skills</a>
        <a href="#projects"   @click="closeMenu">Projects</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#contact"    @click="closeMenu">Contact</a>
      </nav>

      <!-- Hamburger Button (mobile only) -->
      <button
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
      >
        <span class="bar" :class="{ open: menuOpen }"></span>
        <span class="bar" :class="{ open: menuOpen }"></span>
        <span class="bar" :class="{ open: menuOpen }"></span>
      </button>

    </div>

    <!-- Mobile Overlay -->
    <div
      class="menu-overlay"
      v-if="menuOpen"
      @click="closeMenu"
    ></div>

  </header>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #E2E8F0;
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 15px;
  font-weight: 700;
  color: #0F172A;
  text-decoration: none;
  letter-spacing: -0.3px;
  z-index: 101;
}

/* ── Desktop Nav ── */
.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar-links a:hover {
  color: #0F172A;
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #0F172A;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

/* Animasi X saat menu open */
.bar:nth-child(1).open {
  transform: translateY(7px) rotate(45deg);
}
.bar:nth-child(2).open {
  opacity: 0;
  transform: scaleX(0);
}
.bar:nth-child(3).open {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Overlay ── */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  backdrop-filter: blur(2px);
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 300px;
    height: 100vh;
    background-color: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    padding: 5rem 2rem 2rem;
    z-index: 100;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.08);
    transition: right 0.3s ease;
    border-left: 1px solid #E2E8F0;
  }

  .navbar-links.menu-open {
    right: 0;
  }

  .navbar-links a {
    font-size: 18px;
    font-weight: 600;
    color: #0F172A;
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1px solid #F1F5F9;
  }

  .navbar-links a:last-child {
    border-bottom: none;
  }

  .navbar-links a:hover {
    color: #64748B;
  }
}
</style>