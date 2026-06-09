<template>
  <div class="tech-marquee-wrapper">

    <!-- Row 1: gerak ke kiri -->
    <div class="marquee-track">
      <div class="marquee-inner" ref="row1Ref">
        <div
          class="tech-item"
          v-for="(tech, i) in duplicated"
          :key="'r1-' + i"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="tech-icon"
            loading="lazy"
          />
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <!-- Row 2: gerak ke kanan -->
    <div class="marquee-track">
      <div class="marquee-inner" ref="row2Ref">
        <div
          class="tech-item"
          v-for="(tech, i) in duplicated"
          :key="'r2-' + i"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="tech-icon"
            loading="lazy"
          />
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ── Daftar tech + icon dari CDN Simple Icons ──
const techs = [
  {
    name: 'Laravel',
    icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.simpleicons.org/vuedotjs/42b883',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.simpleicons.org/php/777BB4',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.simpleicons.org/mysql/4479A1',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'Git',
    icon: 'https://cdn.simpleicons.org/git/F05032',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.simpleicons.org/github/181717',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.simpleicons.org/vite/646CFF',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.simpleicons.org/figma/F24E1E',
  },
  {
    name: 'Postman',
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
  },
]

// Duplikasi 3x supaya loop seamless
const duplicated = computed(() => [...techs, ...techs, ...techs])

// Refs DOM
const row1Ref = ref(null)
const row2Ref = ref(null)

// State
let scrollY     = 0
let lastScrollY = 0
let raf         = null
let pos1        = 0
let pos2        = 0

const BASE_SPEED = 0.5

function animate() {
  const velocity  = scrollY - lastScrollY
  lastScrollY     = scrollY
  const extra     = velocity * 0.3

  pos1 -= BASE_SPEED + extra
  pos2 += BASE_SPEED + extra

  const width = (row1Ref.value?.scrollWidth || 0) / 3

  if (Math.abs(pos1) >= width) pos1 = 0
  if (pos2 >= width)           pos2 = 0
  if (pos2 < -width)           pos2 = 0

  if (row1Ref.value) {
    row1Ref.value.style.transform = `translateX(${pos1}px)`
  }
  if (row2Ref.value) {
    row2Ref.value.style.transform = `translateX(${-width + pos2}px)`
  }

  raf = requestAnimationFrame(animate)
}

function onScroll() {
  scrollY = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  raf = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.tech-marquee-wrapper {
  width: 100%;
    overflow: hidden;
    padding: 2.5rem 0;
    background-color: #F8FAFC;
    border-top: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.marquee-track {
  width: 100%;
  overflow: hidden;
}

.marquee-inner {
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  will-change: transform;
}

/* ── Tech Item ── */
.tech-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  margin: 0 4px;
  background-color: #F4F6F8;
  /* border: 1px solid #E2E8F0;
  border-radius: 999px; */
  /* transition: box-shadow 0.2s ease, transform 0.2s ease; */
  cursor: default;
}

.tech-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.tech-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.tech-name {
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  white-space: nowrap;
}
</style>