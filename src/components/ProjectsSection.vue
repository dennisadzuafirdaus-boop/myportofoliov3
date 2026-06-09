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
          Beberapa project yang pernah saya kerjakan,
          dari web app hingga landing page.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs fade-up">
        <button class="tab-btn" v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }"
          @click="activeTab = tab">
          {{ tab }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div class="project-card" v-for="project in filteredProjects" :key="project.title">
          <!-- Thumbnail -->
          <div class="card-thumb">

            <!-- Kalau ada gambar -->
            <img v-if="project.image" :src="project.image" :alt="project.title" class="card-img" />

            <!-- Kalau tidak ada gambar, pakai emoji -->
            <span v-else class="card-emoji">
              {{ project.emoji }}
            </span>

            <div class="card-overlay">

              <a :href="project.link"
              target="_blank"
              class="overlay-btn"
              v-if="project.link !== '#'"
              >
              View Project ↗
              </a>
              <span class="overlay-btn disabled" v-else>
                Private Project
              </span>
            </div>

          </div>

          <!-- Card Body -->
          <div class="card-body">

            <!-- Title + Year -->
            <div class="card-top">
              <h3 class="card-title">{{ project.title }}</h3>
              <span class="card-year">{{ project.year }}</span>
            </div>

            <!-- Description -->
            <p class="card-desc">{{ project.description }}</p>

            <!-- Meta: Role + Category -->
            <div class="card-meta">
              <span class="meta-role">{{ project.role }}</span>
              <span class="meta-cat">{{ project.category }}</span>
            </div>

            <!-- Tech Stack Tags -->
            <div class="card-tags">
              <span class="tech-tag" v-for="tech in project.tech" :key="tech">
                {{ tech }}
              </span>
            </div>

            <!-- Publication Link -->
            <a :href="project.link" target="_blank" class="card-link" v-if="project.link !== '#'">
              <span>Visit Project</span>
              <span class="link-arrow">↗</span>
            </a>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// ── Import gambar langsung ──
import imgEcommers from '../assets/img/ecommers.png'
import imgPos from '../assets/img/pos.png'
import imgSistemPakar from '../assets/img/appsistempakar.png'
import imgNevalvc from '../assets/img/nevalvc.png'
import imgUbp from '../assets/img/ubp.png'

// ── Filter Tabs ──
const tabs = ['All', 'Web App', 'App Dekstop' , 'Landing Page' , 'Company Profile']
            // 'landing page', 'dashboar admin'
const activeTab = ref('All')

// ── Data Projects ──
const projects = [
  {
    image: imgEcommers,
    emoji: '🛒',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store dengan fitur cart, payment gateway, manajemen produk, dan admin dashboard.',
    year: '2026',
    role: 'Fullstack Developer',
    category: 'Web App',
    tech: ['Laravel', 'Vite.js', 'MySQL', 'Bootsraps'],
    link: '#',
  },
  {
    image: imgPos,
    emoji: '🧾',
    title: 'POS Application',
    description: 'Sistem Point of Sale dengan fitur inventory, laporan penjualan harian, dan multi-user support.',
    year: '2026',
    role: 'Fullstack Developer',
    category: 'Web App',
    tech: ['Laravel', 'Vite.js', 'MySQL' , 'Bootsrap'],
    link: '#',
  },
  {
    image: imgSistemPakar,
    emoji: '🧠',
    title: 'Sistem Pakar Berbasis Dekstop',
    description: 'Aplikasi sistem pakar untuk diagnosis menggunakan metode forward chaining berbasis dekstop fitur yang ada di aplikasi ada data pasien, data penyakit, data gejala, data aturan , diagnosis, hasil diagnosis, dan laporan.',
    year: '2025',
    role: 'Fullstack Developer',
    category: 'App Dekstop',
    tech: ['Netbeans', 'Java', 'MySQL'],
    link: '#',
  },
  {
    image: imgNevalvc,
    emoji: '📊',
    title: 'Company Profile Website',
    description: 'Company profile di buat khusus untuk mempromosikan club bola volly neval yang sudah resmi terdaftar di pbvsi kota depok.',
    year: '2026',
    role: 'Frontend Developer',
    category: 'Company  Profile',
    tech: ['Vue.js', 'Tailwind CSS', 'Laravel'],
    link: 'https://neval-vc.vercel.app/',
  },
  // {
  //   image: null,
  //   emoji: '🌐',
  //   title: 'Landing Page — Brand X',
  //   description: 'Modern landing page dengan smooth animations, mobile-first design, dan optimasi SEO.',
  //   year: '2024',
  //   role: 'Frontend Developer',
  //   category: 'Landing Page',
  //   tech: ['Vue.js', 'Tailwind CSS'],
  //   link: '#',
  // },
  {
    image: imgUbp,
    emoji: '🏢',
    title: 'Company Profile Website',
    description: 'Website company profile dengan halaman about, services, portfolio, dan contact form.',
    year: '2024',
    role: 'Fullstack Developer',
    category: 'Landing Page',
    tech: ['Laravel', 'Vue.js', 'Tailwind CSS'],
    link: 'https://dennisadzuafirdaus-boop.github.io/LandingPage/UBP.html',
  },
]

// ── Filter Logic ──
const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  return projects.filter((p) => p.category === activeTab.value)
})
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
  margin-bottom: 2rem;
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
}

/* ── Filter Tabs ── */
.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.tab-btn {
  font-size: 13px;
  font-weight: 600;
  color: #64748B;
  background: transparent;
  border: 1.5px solid #E2E8F0;
  padding: 7px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.tab-btn:hover {
  border-color: #94A3B8;
  color: #0F172A;
}

.tab-btn.active {
  background-color: #0F172A;
  border-color: #0F172A;
  color: #FFFFFF;
}

/* ── Projects Grid ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

/* ── Project Card ── */
.project-card {
  background-color: #F1F5F9;
  border: 1px solid #CBD5E1;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

/* ── Thumbnail ── */
.card-thumb {
  position: relative;
  height: 140px;
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-img {
  transform: scale(1.04);
}

.card-emoji {
  font-size: 48px;
  transition: transform 0.3s ease;
}

.project-card:hover .card-emoji {
  transform: scale(1.15);
}

/* Overlay on hover */
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-btn {
  font-size: 13px;
  font-weight: 700;
  color: #FFFFFF;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  padding: 8px 20px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.overlay-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.overlay-btn.disabled {
  opacity: 0.5;
  cursor: default;
}

/* ── Card Body ── */
.card-body {
  padding: 1.25rem;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 15px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.3;
}

.card-year {
  font-size: 12px;
  color: #94A3B8;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 8px;
}

.card-desc {
  font-size: 13px;
  color: #64748B;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

/* ── Card Meta ── */
.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.75rem;
}

.meta-role {
  font-size: 11px;
  font-weight: 600;
  color: #0F172A;
  background-color: #F1F5F9;
  padding: 3px 10px;
  border-radius: 999px;
}

.meta-cat {
  font-size: 11px;
  font-weight: 600;
  color: #64748B;
  background-color: transparent;
  border: 1px solid #E2E8F0;
  padding: 3px 10px;
  border-radius: 999px;
}

/* ── Tech Tags ── */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
}

.tech-tag {
  font-size: 11px;
  font-weight: 500;
  color: #64748B;
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  padding: 3px 10px;
  border-radius: 6px;
}

/* ── Card Link ── */
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #0F172A;
  text-decoration: none;
  border-bottom: 1.5px solid #E2E8F0;
  padding-bottom: 1px;
  transition: border-color 0.2s ease;
}

.card-link:hover {
  border-color: #0F172A;
}

.link-arrow {
  transition: transform 0.2s ease;
}

.card-link:hover .link-arrow {
  transform: translate(2px, -2px);
}
</style>