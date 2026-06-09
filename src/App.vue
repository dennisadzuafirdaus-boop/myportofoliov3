<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ScrollVelocity from './components/ScrollVelocity.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TechMarquee from './components/TechMarquee.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useScrollAnimation } from './composables/useScrollAnimation.js'
useScrollAnimation()
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <ScrollVelocity />
    <AboutSection />
    <SkillsSection />
    <TechMarquee />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <!-- Section lain akan ditambah di sini -->
  </div>
</template>