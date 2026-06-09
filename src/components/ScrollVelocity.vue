<template>
  <div class="scroll-velocity-wrapper" ref="wrapperRef">

    <!-- Row 1: gerak ke kiri -->
    <div class="velocity-track">
      <div class="velocity-inner" ref="track1Ref">
        <span
          class="velocity-item" 
          v-for="(item, i) in duplicatedItems"
          :key="'a' + i"
        >
          {{ item }} <span class="dot">✦</span>
        </span>
      </div>
    </div>

    <!-- Row 2: gerak ke kanan -->
    <div class="velocity-track">
      <div class="velocity-inner" ref="track2Ref">
        <span
          class="velocity-item"
          v-for="(item, i) in duplicatedItems"
          :key="'b' + i"
        >
          {{ item }} <span class="dot">✦</span>
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'

// ── Items yang akan ditampilkan ──
const items = [
  'Dennis', 'Adzua', 'Firdaus',
  'Full', 'Stack', 'Developer',
]

// Duplikasi supaya loop terlihat seamless
const duplicatedItems = computed(() => [...items, ...items, ...items])

// Refs
const wrapperRef = ref(null)
const track1Ref  = ref(null)
const track2Ref  = ref(null)

// State untuk kecepatan
let scrollY      = 0
let lastScrollY  = 0
let velocity     = 0
let raf          = null

// Posisi marquee
let pos1 = 0
let pos2 = 0

// Kecepatan dasar (px per frame)
const BASE_SPEED = 0.6

function animate() {
  // Hitung velocity dari scroll
  velocity = scrollY - lastScrollY
  lastScrollY = scrollY

  // Extra speed dari scroll velocity
  const extra = velocity * 0.4

  // Update posisi
  pos1 -= BASE_SPEED + extra   // ke kiri
  pos2 += BASE_SPEED + extra   // ke kanan

  // Reset posisi supaya infinite loop
  const width = track1Ref.value?.scrollWidth / 3 || 0

  if (Math.abs(pos1) >= width) pos1 = 0
  if (pos2 >= width) pos2 = 0
  if (pos2 < -width) pos2 = 0

  // Apply ke DOM
  if (track1Ref.value) {
    track1Ref.value.style.transform = `translateX(${pos1}px)`
  }
  if (track2Ref.value) {
    track2Ref.value.style.transform = `translateX(${-width + pos2}px)`
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
.scroll-velocity-wrapper {
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

.velocity-track {
  width: 100%;
  overflow: hidden;
}

.velocity-inner {
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  will-change: transform;
}

.velocity-item {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  letter-spacing: -0.3px;
  padding: 0 24px;
  text-transform: uppercase;
  opacity: 1;
}

.scroll-velocity-wrapper:hover .velocity-item {
  opacity: 1;
}

.dot {
  font-size: 10px;
  color: #000000;
  opacity: 1;
}
</style>