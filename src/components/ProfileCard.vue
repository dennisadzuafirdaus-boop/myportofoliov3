<template>
  <div
    ref="wrapRef"
    class="pc-card-wrapper"
    :style="cardStyle"
  >
    <!-- Glow lembut di belakang kartu -->
    <div class="pc-behind"></div>

    <div ref="shellRef" class="pc-card-shell">
      <section class="pc-card">
        <div class="pc-inside">

          <!-- Efek shine mengikuti pointer -->
          <div class="pc-shine"></div>
          <div class="pc-glare"></div>

          <!-- Foto -->
          <div class="pc-avatar-content">
            <img
              :src="avatarUrl"
              :alt="name"
              class="pc-avatar"
            />

            <!-- Info bar di bawah foto -->
            <div class="pc-user-info" v-if="showUserInfo">
              <div class="pc-user-details">
                <span class="pc-status-dot"></span>
                <div class="pc-user-text">
                  <p class="pc-handle">{{ handle }}</p>
                  <p class="pc-status">{{ status }}</p>
                </div>
              </div>

              
                <a :href="contactHref"
                class="pc-contact-btn"
              >
                {{ contactText }}
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  avatarUrl:    { type: String, required: true },
  name:         { type: String, default: 'User' },
  handle:       { type: String, default: '@Dennis' },
  status:       { type: String, default: 'Available for work' },
  contactText:  { type: String, default: 'Contact' },
  contactHref:  { type: String, default: '#contact' },
  showUserInfo: { type: Boolean, default: true },
  enableTilt:   { type: Boolean, default: true },
})

const wrapRef  = ref(null)
const shellRef = ref(null)

// ── Smooth tilt engine sederhana (pointer-follow) ──
let rafId      = null
let currentX   = 0
let currentY   = 0
let targetX    = 0
let targetY    = 0
let lastTs     = 0

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max)
const round = (v, p = 3) => parseFloat(v.toFixed(p))

function setVarsFromXY(x, y) {
  const shell = shellRef.value
  const wrap  = wrapRef.value
  if (!shell || !wrap) return

  const width  = shell.clientWidth || 1
  const height = shell.clientHeight || 1

  const percentX = clamp((100 / width) * x)
  const percentY = clamp((100 / height) * y)

  const centerX = percentX - 50
  const centerY = percentY - 50

  wrap.style.setProperty('--pointer-x', `${percentX}%`)
  wrap.style.setProperty('--pointer-y', `${percentY}%`)
  wrap.style.setProperty('--rotate-x', `${round(-(centerX / 10))}deg`)
  wrap.style.setProperty('--rotate-y', `${round(centerY / 8)}deg`)
  wrap.style.setProperty('--pointer-from-center', `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`)
}

function step(ts) {
  if (lastTs === 0) lastTs = ts
  const dt = (ts - lastTs) / 1000
  lastTs = ts

  const k = 1 - Math.exp(-dt / 0.15)
  currentX += (targetX - currentX) * k
  currentY += (targetY - currentY) * k

  setVarsFromXY(currentX, currentY)

  const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05
  if (stillFar) {
    rafId = requestAnimationFrame(step)
  } else {
    rafId = null
    lastTs = 0
  }
}

function startAnim() {
  if (!rafId) {
    lastTs = 0
    rafId = requestAnimationFrame(step)
  }
}

function handlePointerMove(e) {
  if (!props.enableTilt) return
  const shell = shellRef.value
  if (!shell) return
  const rect = shell.getBoundingClientRect()
  targetX = e.clientX - rect.left
  targetY = e.clientY - rect.top
  shellRef.value.classList.add('active')
  startAnim()
}

function handlePointerLeave() {
  if (!props.enableTilt) return
  const shell = shellRef.value
  if (!shell) return
  targetX = shell.clientWidth / 2
  targetY = shell.clientHeight / 2
  shell.classList.remove('active')
  startAnim()
}

const cardStyle = computed(() => ({}))

onMounted(() => {
  const shell = shellRef.value
  if (!shell || !props.enableTilt) return
  shell.addEventListener('pointermove', handlePointerMove)
  shell.addEventListener('pointerleave', handlePointerLeave)

  // Posisi awal netral
  targetX = shell.clientWidth / 2
  targetY = shell.clientHeight / 2
  currentX = targetX
  currentY = targetY
  setVarsFromXY(currentX, currentY)
})

onUnmounted(() => {
  const shell = shellRef.value
  if (shell) {
    shell.removeEventListener('pointermove', handlePointerMove)
    shell.removeEventListener('pointerleave', handlePointerLeave)
  }
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.pc-card-wrapper {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  perspective: 900px;
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

/* ── Glow lembut di belakang ── */
.pc-behind {
  position: absolute;
  inset: -20px;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--pointer-x) var(--pointer-y),
    rgba(15, 23, 42, 0.08) 0%,
    transparent 60%
  );
  filter: blur(30px);
  transition: opacity 0.3s ease;
}

.pc-card-shell {
  position: relative;
  z-index: 1;
}

.pc-card {
  aspect-ratio: 3 / 4;
  border-radius: 24px;
  position: relative;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
  transition: transform 0.6s ease, box-shadow 0.3s ease;
  transform: rotateX(0deg) rotateY(0deg);
  overflow: hidden;
}

.pc-card-shell.active .pc-card {
  transition: transform 0.1s ease-out;
  transform: rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.14);
}

.pc-inside {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #F8FAFC 0%, #F1F5F9 100%);
}

/* ── Shine — highlight lembut mengikuti pointer ── */
.pc-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(
    circle at var(--pointer-x) var(--pointer-y),
    rgba(255, 255, 255, 0.55) 0%,
    transparent 45%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.pc-card-shell.active .pc-shine {
  opacity: 1;
}

.pc-glare {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255, 255, 255, 0.25) 45%,
    transparent 60%
  );
  background-size: 250% 250%;
  background-position: calc(var(--pointer-x)) calc(var(--pointer-y));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.pc-card-shell.active .pc-glare {
  opacity: 1;
}

/* ── Avatar ── */
.pc-avatar-content {
  position: absolute;
  inset: 0;
  z-index: 4;
}

.pc-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Info bar bawah ── */
.pc-user-info {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 14px;
  padding: 10px 12px;
}

.pc-user-details {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pc-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #16A34A;
  flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
}

.pc-user-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.pc-handle {
  font-size: 12px;
  font-weight: 700;
  color: #0F172A;
}

.pc-status {
  font-size: 10px;
  color: #64748B;
  font-weight: 500;
}

.pc-contact-btn {
  font-size: 11px;
  font-weight: 700;
  color: #FFFFFF;
  background-color: #0F172A;
  padding: 7px 14px;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.pc-contact-btn:hover {
  background-color: #1E293B;
}

/* ── Responsive Mobile ── */
@media (max-width: 768px) {
  .pc-card-wrapper {
    max-width: 220px;
  }

  .pc-handle {
    font-size: 11px;
  }

  .pc-status {
    font-size: 9px;
  }

  .pc-contact-btn {
    font-size: 10px;
    padding: 6px 12px;
  }
}
</style>