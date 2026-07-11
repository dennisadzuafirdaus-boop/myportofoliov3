<template>
  <section id="about" class="about">
    <div class="about-inner">

      <!-- Section Label -->
      <div class="section-label fade-up">
        <span class="label-number">01</span>
        <span class="label-text">About Me</span>
      </div>

      <!-- Content Grid -->
      <div class="about-grid">

        <!-- Kiri: Bio -->
        <div class="about-left fade-up">
          <h2 class="about-title">
            Passionate builder of<br />
            <span class="text-accent">modern web experiences</span>
          </h2>

          <p class="about-desc">
            Hello! I'm Dennis, an information technology graduate with a strong interest in software development and information technology. I have a strong passion for learning and am always enthusiastic about developing my skills through various projects.
          </p>

          <p class="about-desc">
            My current focus is web application development using Laravel, Vue.js, and database management. I have worked on several projects, including desktop-based expert systems, Point of Sale (POS) applications, Client Management Systems (CMS), and various other practice projects.
          </p>

          <p class="about-desc">
            Besides web development, I also have an interest in IT support, computer troubleshooting, and basic system and network management. My internship as an IT support professional has given me a better understanding of communication and problem-solving.
          </p>

          <p class="about-desc">
           Outside of academics, I enjoy playing volleyball, which teaches me the importance of teamwork, discipline, and responsibility. I believe that technical skills need to be balanced with adaptability and a professional attitude.
          </p>

          <!-- Tech stack tags -->
          <div class="tech-tags">
            <span class="tag" v-for="tech in techStack" :key="tech">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Kanan: Foto + Stats + Info -->
        <div class="about-right fade-up">

          <!-- Foto Profile -->
          <div class="profile-wrapper">
            <div class="profile-img-box">
              <img
                src="../assets/img/foto1.jpeg"
                alt="Dennis Adzua Firdaus"
                class="profile-img"
              />
            </div>
            <!-- Badge floating -->
            <div class="profile-badge">
              <span class="badge-dot"></span>
              Available for work
            </div>
          </div>

          <!-- Animated Stat Cards -->
          <div class="stats-grid" ref="statsRef">
            <div
              class="stat-card"
              v-for="stat in stats"
              :key="stat.label"
            >
              <p class="stat-number">
                <span class="counter" :data-target="stat.target">0</span>
                {{ stat.suffix }}
              </p>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Info List -->
          <div class="info-list">
            <div
              class="info-item"
              v-for="info in infoList"
              :key="info.label"
            >
              <span class="info-label">{{ info.label }}</span>
              <span class="info-value">{{ info.value }}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

// ── Data Stats ──
const stats = [
//   { target: 3,  suffix: '+', label: 'Years Experience' },
  { target: 2, suffix: '++', label: 'Projects Done'    },
  { target: 100, suffix: '%', label: 'Committed'    },
//   { target: 6,  suffix: '+', label: 'Years at SMK'     },
]

// ── Data Info ──
const infoList = [
  { label: 'Name',      value: 'Dennis Adzua Firdaus'  },
  { label: 'Role',      value: 'Fullstack Developer'   },
  { label: 'Location',  value: 'Bogor, Indonesia'    },
  { label: 'Status',    value: 'Open for Work and Projects'},
]

// ── Tech Stack ──
const techStack = [
  'Laravel', 'Vue.js', 'PHP', 'Javascript', 'MySQL', 
  'Tailwind CSS','Bootsrap', 'REST API', 'Laragon', 'Git',
]

// ── Animated Counter dengan GSAP ──
const statsRef = ref(null)
let observer   = null
let animated   = false

function runCounters() {
  // Pastikan hanya jalan sekali
  if (animated) return
  animated = true

  const counters = statsRef.value?.querySelectorAll('.counter')

  counters?.forEach((el) => {
    const target = parseInt(el.dataset.target)

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 }, // supaya angka integer, tidak desimal
        onUpdate() {
          el.innerText = Math.round(parseFloat(el.innerText))
        },
      }
    )
  })
}

onMounted(() => {
  // Pakai IntersectionObserver — counter jalan saat stat cards masuk viewport
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounters()
        }
      })
    },
    { threshold: 0.3 }
  )

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.about {
  padding: 6rem 2rem;
  background-color: #FFFFFF;
}

.about-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Section Label ── */
.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 3rem;
}

.label-number {
  font-size: 13px;
  font-weight: 700;
  color: #94A3B8;
  letter-spacing: 0.05em;
}

.label-text {
  font-size: 13px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Grid ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

/* ── Left Side ── */
.about-title {
  font-size: 32px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.3;
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
}

.text-accent {
  color: #64748B;
}

.about-desc {
  font-size: 15px;
  color: #64748B;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: justify;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.5rem;
}

.tag {
  font-size: 12px;
  font-weight: 600;
  color: #0F172A;
  background-color: #F1F5F9;
  border: 1px solid #E2E8F0;
  padding: 5px 14px;
  border-radius: 999px;
}

/* ── Right Side ── */

/* Foto Profile */
.profile-wrapper {
  position: relative;
  margin-bottom: 1.75rem;
  display: flex;
  justify-content: center;
}

.profile-img-box {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 4 / 5;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.profile-img-box:hover .profile-img {
  transform: scale(1.04);
}

/* Badge floating di bawah foto */
.profile-badge {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #0F172A;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #16A34A;
  /* Animasi pulse hijau */
  animation: pulse-green 2s ease-in-out infinite;
}

@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4); }
  50%       { box-shadow: 0 0 0 6px rgba(22, 163, 74, 0); }
}

/* Stat Cards */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 12px;
  color: #94A3B8;
  font-weight: 500;
}

/* Info List */
.info-list {
  display: flex;
  flex-direction: column;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
  background-color: #FFFFFF;
  transition: background-color 0.15s ease;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item:hover {
  background-color: #F8FAFC;
}

.info-label {
  font-size: 13px;
  color: #94A3B8;
  font-weight: 500;
}

.info-value {
  font-size: 13px;
  color: #0F172A;
  font-weight: 600;
}

/* ── RESPONSIVE MOBILE ── */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  /* Foto pindah ke atas */
  .about-right {
    order: -1;
  }

  .profile-img-box {
    width: 100%;
    max-width: 280px;
    height: 350px;
    margin: 0 auto;
    aspect-ratio: 4 / 5;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-title {
    font-size: 26px;
  }
}
</style>