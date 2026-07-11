<template>
  <section id="projects" class="projects">
    <div class="projects-inner">

      <!-- Section Label -->
      <div class="section-label fade-up">
        <span class="label-number">03</span>
        <span class="label-text">Projects</span>
      </div>

      <!-- Section Heading -->
      <div class="section-heading fade-up">
        <h2 class="projects-title">Things I've built</h2>
        <p class="projects-subtitle">
            A collection of practice projects I've worked on — from web apps, desktop app, landing page, and company profile.
        </p>
      </div>

      <!-- ── Showcase: CardSwap + Info Panel ── -->
      <div class="showcase fade-up">

        <!-- KIRI: CardSwap semua project -->
        <div class="showcase-swap">
          <CardSwap
            :card-distance="18"
            :vertical-distance="12"
            :delay="2800"
            :pause-on-hover="true"
            :width="300"
            :height="200"
            @change="onCardChange"
          >
            <template
              v-for="(project, index) in projects"
              :key="project.title"
              v-slot:[`card-${index}`]
            >
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
              />
              <div v-else class="swap-emoji-fallback">
                {{ project.emoji }}
              </div>
            </template>
          </CardSwap>
        </div>

        <!-- KANAN: Info Project Aktif -->
        <div class="showcase-info">

          <Transition name="fade-slide" mode="out-in">
            <div :key="activeProject.title" class="info-content">

              <div class="info-top">
                <span class="info-category">{{ activeProject.category }}</span>
                <span class="info-year">{{ activeProject.year }}</span>
              </div>

              <h3 class="info-title">{{ activeProject.title }}</h3>

              <p class="info-desc">{{ activeProject.description }}</p>

              <div class="info-meta">
                <span class="info-role">{{ activeProject.role }}</span>
              </div>

              <div class="info-tags">
                <span
                  class="info-tag"
                  v-for="tech in activeProject.tech"
                  :key="tech"
                >
                  {{ tech }}
                </span>
              </div>

              
                <a v-if="activeProject.link !== '#'"
                :href="activeProject.link"
                target="_blank"
                rel="noopener noreferrer"
                class="info-link"
              >
                <span>Visit Project</span>
                <span class="info-link-arrow">↗</span>
              </a>
              <span v-else class="info-link disabled">
                Private Project
              </span>

            </div>
          </Transition>

          <!-- Progress -->
          <div class="showcase-progress">
            <span class="progress-count">
              {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}
            </span>
            <div class="progress-dots">
              <span
                class="progress-dot"
                v-for="(p, i) in projects"
                :key="p.title"
                :class="{ active: i === activeIndex }"
              ></span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardSwap from './CardSwap.vue'

// ── Import gambar ──
import imgEcommers    from '../assets/img/ecommers.png'
import imgPos         from '../assets/img/pos.png'
import imgSistemPakar from '../assets/img/appsistempakar.png'
import imgNevalvc     from '../assets/img/nevalvc.png'
import imgUbp         from '../assets/img/ubp.png'
import systemCms1     from '../assets/img/systemcms1.png'

// ── Data Semua Project (gabungan semua kategori) ──
const projects = [
  {
    image:       systemCms1,
    emoji:       '💼',
    title:       'Client Management System',
    description: 'Client project management system with tracking features, Midtrans payment gateway, and analytics dashboard. Built as the main portfolio for PT Citra Unggul Solusindo.',
    year:        '2026',
    role:        'Fullstack Developer',
    category:    'Web App',
    tech:        ['Laravel', 'Vue.js', 'Tailwind CSS', 'Midtrans'],
    link:        '#',
  },
  {
    image:       imgEcommers,
    emoji:       '🛒',
    title:       'E-Commerce Platform',
    description: 'Full-featured online store dengan fitur cart, payment gateway, manajemen produk, dan admin dashboard.',
    year:        '2026',
    role:        'Fullstack Developer',
    category:    'Web App',
    tech:        ['Laravel', 'Vite.js','MySQL', 'Bootstrap'],
    link:        '#',
  },
  {
    image:       imgPos,
    emoji:       '🧾',
    title:       'POS Application',
    description: 'Point of Sale system with inventory features, daily sales reports, and multi-user support.',
    year:        '2026',
    role:        'Fullstack Developer',
    category:    'Web App',
    tech:        ['Laravel', 'Vite.js', 'MySQL', 'Bootstrap'],
    link:        '#',
  },
  {
    image:       imgSistemPakar,
    emoji:       '🧠',
    title:       'Desktop-Based Expert System for Diagnosing Maternal Diseases',
    description: 'An expert system application for diagnosis using the desktop-based forward chaining method. Features: patient data, disease data, symptom data, rule data, diagnosis, diagnosis results, and reports.',
    year:        '2025',
    role:        'Fullstack Developer',
    category:    'App Desktop',
    tech:        ['Netbeans', 'Java', 'MySQL'],
    link:        '#',
  },
  {
    image:       imgNevalvc,
    emoji:       '🏐',
    title:       'Neval VC — Company Profile',
    description: 'Company profile for the Neval volleyball club which has been officially registered with PBVSI Depok City.',
    year:        '2026',
    role:        'Frontend Developer',
    category:    'Company Profile',
    tech:        ['React.js','Tailwind CSS'],
    link:        'https://neval-vc.vercel.app/',
  },
  {
    image:       imgUbp,
    emoji:       '🏢',
    title:       'UBP — Landing Page',
    description: 'Company profile website with about, services, portfolio, and contact form pages.',
    year:        '2024',
    role:        'Fullstack Developer',
    category:    'Landing Page',
    tech:        ['HTML', 'CSS', 'Javascript'],
    link:        'https://dennisadzuafirdaus-boop.github.io/LandingPage/UBP.html',
  },
]

// ── Sinkronisasi CardSwap dengan Info Panel ──
const activeIndex   = ref(0)
const activeProject = computed(() => projects[activeIndex.value])

function onCardChange(index) {
  activeIndex.value = index
}
</script>

<style scoped>
.projects {
  padding: 6rem 2rem;
  background-color: #F8FAFC;
}

.projects-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Section Label ── */
.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
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

/* ── Heading ── */
.section-heading {
  margin-bottom: 3rem;
}

.projects-title {
  font-size: 32px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.projects-subtitle {
  font-size: 15px;
  color: #64748B;
  line-height: 1.7;
  max-width: 480px;
}

/* ── Showcase Layout ── */
.showcase {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 3.5rem;
  align-items: center;
}

/* ── KIRI: CardSwap ── */
.showcase-swap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
}

.swap-emoji-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
}

/* ── KANAN: Info Panel ── */
.showcase-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-content {
  min-height: 220px;
}

.info-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
}

.info-category {
  font-size: 11px;
  font-weight: 700;
  color: #0F172A;
  background-color: #F1F5F9;
  border: 1px solid #E2E8F0;
  padding: 4px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-year {
  font-size: 13px;
  color: #94A3B8;
  font-weight: 500;
}

.info-title {
  font-size: 26px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.4px;
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.info-desc {
  font-size: 14px;
  color: #64748B;
  line-height: 1.75;
  margin-bottom: 1rem;
  max-width: 520px;
}

.info-meta {
  margin-bottom: 1rem;
}

.info-role {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}

.info-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.25rem;
}

.info-tag {
  font-size: 12px;
  font-weight: 600;
  color: #0F172A;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  padding: 5px 14px;
  border-radius: 999px;
}

.info-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
  text-decoration: none;
  border-bottom: 1.5px solid #0F172A;
  padding-bottom: 2px;
  width: fit-content;
  transition: gap 0.2s ease, opacity 0.2s ease;
}

.info-link:hover {
  gap: 10px;
}

.info-link.disabled {
  color: #94A3B8;
  border-bottom-color: #E2E8F0;
  cursor: default;
}

.info-link-arrow {
  transition: transform 0.2s ease;
}

/* ── Progress ── */
.showcase-progress {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 1rem;
  border-top: 1px solid #E2E8F0;
}

.progress-count {
  font-size: 12px;
  font-weight: 700;
  color: #94A3B8;
  letter-spacing: 0.05em;
  font-variant-numeric: tabular-nums;
}

.progress-dots {
  display: flex;
  gap: 6px;
}

.progress-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #E2E8F0;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.progress-dot.active {
  background-color: #0F172A;
  transform: scale(1.4);
}

/* ── Transition Info Panel ── */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── Responsive Mobile ── */
@media (max-width: 900px) {
  .showcase {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .showcase-swap {
    min-height: 220px;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1.25rem;
  }

  .projects-title {
    font-size: 26px;
  }

  .info-title {
    font-size: 22px;
  }

  .info-desc {
    max-width: 100%;
  }
}
</style>