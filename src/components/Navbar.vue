<template>
  <header class="navbar">
    <div class="navbar-inner">

      <!-- Logo / Brand -->
      <a href="#hero" class="navbar-logo">
        dennis.dev
      </a>

      <!-- Nav Links -->
      <nav class="navbar-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

    </div>
  </header>
</template>

<script setup>
// Tidak ada logic khusus, navbar ini static
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
}

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
</style>