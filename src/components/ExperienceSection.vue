<template>
  <section id="experience" class="experience">
    <div class="experience-inner">

      <!-- Section Label -->
      <div class="section-label fade-up">
        <span class="label-number">04</span>
        <span class="label-text">Experience</span>
      </div>

      <!-- Section Heading -->
      <div class="section-heading fade-up">
        <h2 class="exp-title">Where I've worked</h2>
        <p class="exp-subtitle">
          Perjalanan profesional dan pengalaman kerja saya.
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline">

        <!-- ── Experience 1: SMK 37 PGRI ── -->
        <div class="exp-card fade-up">

          <div class="exp-header">
            <div class="exp-logo">🏫</div>
            <div class="exp-meta">
              <div class="exp-top-row">
                <h3 class="exp-role"Web Developer</h3>
                <span class="exp-badge badge-blue">PKL (Praktik Kerja Lapangan)</span>
              </div>
              <p class="exp-company">SMK 37 PGRI Jakarta</p>
              <div class="exp-info-row">
                <span class="exp-info-item">
                  <span>📅</span> Oktober 2024 – Januari 2025
                </span>
                <span class="exp-info-item">
                  <span>📍</span> Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>

          <div class="exp-divider"></div>

          <!-- Deskripsi -->
          <div class="exp-section">
            <h4 class="exp-section-title">Deskripsi</h4>
            <p class="exp-desc">
              Melaksanakan Praktik Kerja Lapangan yang di selanggarakan oleh pihak
              universitas untuk persyaratan tugas akhir yang sudah di bagi 1 
              kelompok berisi 8 orang sebagai Fullstack Developer di SMK 37
              PGRI Jakarta. Bertanggung jawab dalam perancangan dan pengembangan Sistem
              Administrasi Pembayaran SPP berbasis web menggunakan PHP Native dan MySQL,
              mulai dari desain database hingga tampilan antarmuka pengguna.
            </p>
          </div>

          <!-- Tanggung Jawab -->
          <div class="exp-section">
            <h4 class="exp-section-title">Tanggung Jawab</h4>
            <ul class="resp-list">
              <li
                class="resp-item"
                v-for="item in smkResponsibilities"
                :key="item"
              >
                <span class="resp-dot">✦</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="exp-section">
            <h4 class="exp-section-title">Tech Stack</h4>
            <div class="stack-tags">
              <span
                class="stack-tag"
                v-for="tech in smkTechStack"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="exp-divider"></div>

          <!-- Dokumen PKL -->
          <div class="exp-section">
            <h4 class="exp-section-title">Dokumen PKL</h4>
            <p class="gallery-subtitle">
              Dokumen resmi selama Praktik Kerja Lapangan.
            </p>
            <div class="pdf-list" ref="pdfListRef">
              <div
                class="pdf-card"
                v-for="doc in pdfDocs"
                :key="doc.name"
              >
                <div class="pdf-info">
                  <div class="pdf-icon">{{ doc.icon }}</div>
                  <div class="pdf-detail">
                    <p class="pdf-name">{{ doc.name }}</p>
                    <p class="pdf-meta">{{ doc.meta }}</p>
                  </div>
                </div>
                <div class="pdf-actions">
                  
                    <a :href="doc.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pdf-btn btn-view"
                  >
                    <span>👁</span> Lihat
                  </a>
                  
                    <a :href="doc.url"
                    :download="doc.name + '.pdf'"
                    class="pdf-btn btn-download"
                  >
                    <span>⬇</span> Download
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ── Experience 2: PT. Eka Mulia Bhakti ── -->
        <div class="exp-card fade-up">

          <div class="exp-header">
            <div class="exp-logo">🏢</div>
            <div class="exp-meta">
              <div class="exp-top-row">
                <h3 class="exp-role">IT Support</h3>
                <span class="exp-badge badge-green">Magang HUB Kemnaker</span>
              </div>
              <p class="exp-company">PT. Eka Mulia Bhakti</p>
              <div class="exp-info-row">
                <span class="exp-info-item">
                  <span>📅</span> September 2025 – Mei 2026
                </span>
                <span class="exp-info-item">
                  <span>📍</span> Bogor, Indonesia
                </span>
                <span class="exp-info-item">
                  <span>🏛️</span> Program Magang HUB — Kemnaker RI
                </span>
              </div>
            </div>
          </div>

          <div class="exp-divider"></div>

          <!-- Deskripsi -->
          <div class="exp-section">
            <h4 class="exp-section-title">Deskripsi</h4>
            <p class="exp-desc">
             Mengikuti Program Magang HUB yang diselenggarakan oleh Kementerian Ketenagakerjaan Republik Indonesia, sebuah program yang bertujuan meningkatkan kompetensi dan pengalaman kerja peserta melalui penempatan langsung di dunia industri.

            Selama masa magang di PT. Eka Mulia Bhakti sebagai IT Support, Membantu dalam pemeliharaan dan pengelolaan infrastruktur teknologi informasi perusahaan untuk memastikan operasional berjalan dengan optimal. Melakukan Migration data pasien dari sistem lama ke sistem baru, Menghubungkan Dicom router ke sistem Teramedik untuk mengirimkan gambar hasil rontsen ke platform satu sehat lewat sistem orthanc, dan perawatan perangkat keras maupun perangkat lunak, serta memberikan dukungan teknis kepada karyawan dalam menyelesaikan berbagai permasalahan yang berkaitan dengan sistem komputer, jaringan, dan aplikasi kerja.

            Selain itu, membantu proses troubleshooting terhadap komputer, printer, jaringan internet, dan perangkat pendukung lainnya, serta membantu dalam pengelolaan aset teknologi informasi perusahaan. Berkolaborasi dengan tim untuk memastikan keamanan, stabilitas, dan efisiensi penggunaan teknologi di lingkungan kerja.
            </p>
          </div>

          <!-- Tanggung Jawab -->
          <div class="exp-section">
            <h4 class="exp-section-title">Tanggung Jawab</h4>
            <ul class="resp-list">
              <li
                class="resp-item"
                v-for="item in itResponsibilities"
                :key="item"
              >
                <span class="resp-dot">✦</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Tools & Skills -->
          <div class="exp-section">
            <h4 class="exp-section-title">Tools & Skills</h4>
            <div class="stack-tags">
              <span
                class="stack-tag"
                v-for="tech in itTechStack"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="exp-divider"></div>

          <!-- Dokumentasi Gallery — Option D: Masonry + Reveal -->
          <div class="exp-section">
            <h4 class="exp-section-title">Dokumentasi Magang</h4>
            <p class="gallery-subtitle">Klik gambar untuk melihat lebih detail.</p>

            <div class="masonry-grid" ref="galleryRef">

              <!-- Kolom 1 -->
              <div class="masonry-col">
                <div
                  class="gallery-item"
                  v-for="(doc, index) in col1"
                  :key="'c1-' + index"
                  @click="openLightbox(doc.originalIndex)"
                >
                  <img :src="doc.src" :alt="doc.caption" class="gallery-img" loading="lazy" />
                  <div class="gallery-overlay">
                    <span class="gallery-zoom">🔍</span>
                    <span class="gallery-cap-overlay">{{ doc.caption }}</span>
                  </div>
                </div>
              </div>

              <!-- Kolom 2 -->
              <div class="masonry-col col-offset">
                <div
                  class="gallery-item"
                  v-for="(doc, index) in col2"
                  :key="'c2-' + index"
                  @click="openLightbox(doc.originalIndex)"
                >
                  <img :src="doc.src" :alt="doc.caption" class="gallery-img" loading="lazy" />
                  <div class="gallery-overlay">
                    <span class="gallery-zoom">🔍</span>
                    <span class="gallery-cap-overlay">{{ doc.caption }}</span>
                  </div>
                </div>
              </div>

              <!-- Kolom 3 -->
              <div class="masonry-col">
                <div
                  class="gallery-item"
                  v-for="(doc, index) in col3"
                  :key="'c3-' + index"
                  @click="openLightbox(doc.originalIndex)"
                >
                  <img :src="doc.src" :alt="doc.caption" class="gallery-img" loading="lazy" />
                  <div class="gallery-overlay">
                    <span class="gallery-zoom">🔍</span>
                    <span class="gallery-cap-overlay">{{ doc.caption }}</span>
                  </div>
                </div>
              </div>

              <!-- Kolom 4 -->
              <div class="masonry-col col-offset">
                <div
                  class="gallery-item"
                  v-for="(doc, index) in col4"
                  :key="'c4-' + index"
                  @click="openLightbox(doc.originalIndex)"
                >
                  <img :src="doc.src" :alt="doc.caption" class="gallery-img" loading="lazy" />
                  <div class="gallery-overlay">
                    <span class="gallery-zoom">🔍</span>
                    <span class="gallery-cap-overlay">{{ doc.caption }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        class="lightbox"
        v-if="lightboxOpen"
        @click.self="closeLightbox"
      >
        <div class="lightbox-inner">

          <button class="lb-close" @click="closeLightbox">✕</button>

          <button
            class="lb-nav lb-prev"
            @click="prevImage"
            :disabled="currentIndex === 0"
          >‹</button>

          <div class="lb-img-wrapper">
            <img
              :src="documents[currentIndex].src"
              :alt="documents[currentIndex].caption"
              class="lb-img"
            />
            <p class="lb-caption">{{ documents[currentIndex].caption }}</p>
            <p class="lb-counter">{{ currentIndex + 1 }} / {{ documents.length }}</p>
          </div>

          <button
            class="lb-nav lb-next"
            @click="nextImage"
            :disabled="currentIndex === documents.length - 1"
          >›</button>

        </div>
      </div>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

// ── Import PDF PKL ──
import pdfFromKKP          from '../assets/pdf/FORM_KKP.pdf?url'
import pdfLembarPengesahan from '../assets/pdf/LEMBAR_PENGESAHAN_INSTANSI.pdf?url'
import pdfLembarPenilaian  from '../assets/pdf/LEMBAR_PENILAIAN_INSTANSI.pdf?url'
import pdfSuratKeterangan  from '../assets/pdf/SURAT_KETERANGAN_INSTANSI.pdf?url'
import pdfSuratPermohonan  from '../assets/pdf/SURAT_PERMOHONAN_KKP.pdf?url'

// ── Import Dokumentasi IT Support ──
import doc1 from '../assets/img/dokumen1.jpeg'
import doc2 from '../assets/img/dokumen2.jpeg'
import doc3 from '../assets/img/dokumen3.jpeg'
import doc4 from '../assets/img/dokumen4.jpeg'
import doc5 from '../assets/img/dokumen5.jpeg'
import doc6 from '../assets/img/dokumen6.jpeg'
import doc7 from '../assets/img/dokumen7.jpeg'
import doc8 from '../assets/img/dokumen8.png'

// ── SMK 37 PGRI — Responsibilities ──
const smkResponsibilities = [
  'Merancang database sistem administrasi pembayaran SPP menggunakan MySQL.',
  'Membangun sistem menggunakan PHP Native.',
  'Mengimplementasikan fitur laporan pembayaran yang dapat di-export ke PDF.',
  'Melakukan testing dan debugging pada sistem yang dikembangkan.',
  'Mendokumentasikan setiap fitur dan alur sistem secara teknis.',
]

const smkTechStack = ['PHP Native', 'MySQL', 'CSS', 'HTML']

// ── IT Support — Responsibilities ──
const itResponsibilities = [
  'Melakukan troubleshooting perangkat keras dan lunak untuk seluruh karyawan.',
  'Memelihara dan mengkonfigurasi jaringan komputer di lingkungan kantor.',
  'Menginstalasi dan mengkonfigurasi software yang dibutuhkan pengguna.',
  'Memberikan dukungan teknis langsung kepada karyawan secara on-site.',
  'Mendokumentasikan setiap permasalahan IT dan solusi yang diberikan.',
  'Membantu pengelolaan aset perangkat IT perusahaan.',
]

const itTechStack = [
  'Windows Server', 'Networking', 'Hardware Troubleshooting',
  'Software Installation', 'IT Documentation', 'Remote Desktop',
]

// ── Data PDF ──
const pdfDocs = [
  { url: pdfFromKKP,          name: 'Form KKP',                  meta: 'Formulir Kartu Kerja Praktik',              icon: '📋' },
  { url: pdfLembarPengesahan, name: 'Lembar Pengesahan Instansi', meta: 'Dokumen pengesahan dari instansi',           icon: '✅' },
  { url: pdfLembarPenilaian,  name: 'Lembar Penilaian Instansi',  meta: 'Penilaian dari pembimbing instansi',         icon: '📊' },
  { url: pdfSuratKeterangan,  name: 'Surat Keterangan Instansi',  meta: 'Surat keterangan resmi dari instansi',      icon: '🏢' },
  { url: pdfSuratPermohonan,  name: 'Surat Permohonan KKP',       meta: 'Surat permohonan Praktik Kerja Lapangan',   icon: '📝' },
]

// ── Data Dokumentasi ──
const documents = [
  { src: doc1, caption: 'Dokumentasi Magang #1' },
  { src: doc2, caption: 'Dokumentasi Magang #2' },
  { src: doc3, caption: 'Dokumentasi Magang #3' },
  { src: doc4, caption: 'Dokumentasi Magang #4' },
  { src: doc5, caption: 'Dokumentasi Magang #5' },
  { src: doc6, caption: 'Dokumentasi Magang #6' },
  { src: doc7, caption: 'Dokumentasi Magang #7' },
  { src: doc8, caption: 'Dokumentasi Magang #8' },
]

// ── Masonry: bagi dokumen ke 4 kolom ──
const docsWithIndex = documents.map((d, i) => ({ ...d, originalIndex: i }))
const col1 = computed(() => docsWithIndex.filter((_, i) => i % 4 === 0))
const col2 = computed(() => docsWithIndex.filter((_, i) => i % 4 === 1))
const col3 = computed(() => docsWithIndex.filter((_, i) => i % 4 === 2))
const col4 = computed(() => docsWithIndex.filter((_, i) => i % 4 === 3))

// ── Refs ──
const pdfListRef = ref(null)
const galleryRef = ref(null)

// ── Lightbox ──
const lightboxOpen = ref(false)
const currentIndex = ref(0)

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  if (currentIndex.value > 0) currentIndex.value--
}

function nextImage() {
  if (currentIndex.value < documents.length - 1) currentIndex.value++
}

function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'ArrowLeft')  prevImage()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'Escape')     closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  // ── Animasi Stagger PDF Cards ──
  if (pdfListRef.value) {
    const obsPdf = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(pdfListRef.value.children, {
              opacity:    0,
              y:          24,
              duration:   0.5,
              stagger:    0.1,
              ease:       'power2.out',
              clearProps: 'all',
            })
            obsPdf.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    obsPdf.observe(pdfListRef.value)
  }

  // ── Animasi Option D: Masonry Reveal ──
  // Kolom ganjil (1,3) dari kiri, kolom genap (2,4) dari kanan
  if (galleryRef.value) {
    const obsGallery = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cols = galleryRef.value.querySelectorAll('.masonry-col')

            cols.forEach((col, i) => {
              const fromLeft = i % 2 === 0  // kolom 0,2 dari kiri
              gsap.from(col.children, {
                opacity:    0,
                x:          fromLeft ? -50 : 50,
                y:          20,
                duration:   0.6,
                stagger:    0.12,
                delay:      i * 0.08,
                ease:       'power3.out',
                clearProps: 'all',
              })
            })

            obsGallery.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    obsGallery.observe(galleryRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.experience {
  padding: 6rem 2rem;
  background-color: #F4F6F8;
}

.experience-inner {
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
.section-heading { margin-bottom: 2.5rem; }

.exp-title {
  font-size: 32px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.exp-subtitle {
  font-size: 15px;
  color: #64748B;
}

/* ── Timeline ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── Card ── */
.exp-card {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 2rem;
  transition: box-shadow 0.2s ease;
}

.exp-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

/* ── Header ── */
.exp-header {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.exp-logo {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background-color: #F1F5F9;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.exp-meta { flex: 1; }

.exp-top-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.3px;
}

.exp-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
}

.badge-blue  { color: #0369A1; background-color: #E0F2FE; }
.badge-green { color: #15803D; background-color: #DCFCE7; }

.exp-company {
  font-size: 15px;
  font-weight: 600;
  color: #64748B;
  margin-bottom: 8px;
}

.exp-info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.exp-info-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}

/* ── Divider ── */
.exp-divider {
  height: 1px;
  background-color: #F1F5F9;
  margin: 1.5rem 0;
}

/* ── Section dalam card ── */
.exp-section {
  margin-bottom: 1.5rem;
}

.exp-section:last-child { margin-bottom: 0; }

.exp-section-title {
  font-size: 11px;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.exp-desc {
  font-size: 14px;
  color: #64748B;
  line-height: 1.8;
  text-align: justify;
}

/* ── Responsibilities ── */
.resp-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.resp-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #64748B;
  line-height: 1.7;
}

.resp-dot {
  font-size: 8px;
  color: #CBD5E1;
  margin-top: 6px;
  flex-shrink: 0;
}

/* ── Tech Stack ── */
.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-tag {
  font-size: 12px;
  font-weight: 600;
  color: #0F172A;
  background-color: #F1F5F9;
  border: 1px solid #E2E8F0;
  padding: 5px 14px;
  border-radius: 999px;
}

/* ── PDF List ── */
.gallery-subtitle {
  font-size: 13px;
  color: #94A3B8;
  margin-bottom: 1rem;
}

.pdf-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pdf-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  flex-wrap: wrap;
}

.pdf-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transform: translateX(4px);
}

.pdf-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.pdf-icon {
  width: 44px;
  height: 44px;
  background-color: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.pdf-name {
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 2px;
}

.pdf-meta {
  font-size: 12px;
  color: #94A3B8;
  font-weight: 500;
}

.pdf-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.pdf-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.btn-view {
  color: #0F172A;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
}

.btn-view:hover { background-color: #F1F5F9; }

.btn-download {
  color: #FFFFFF;
  background-color: #0F172A;
  border: 1px solid #0F172A;
}

.btn-download:hover {
  background-color: #1E293B;
  transform: translateY(-1px);
}

/* ── Masonry Gallery ── */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  align-items: start;
}

/* Kolom genap sedikit turun supaya layout masonry */
.masonry-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-offset {
  margin-top: 24px;
}

/* ── Gallery Item ── */
.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #E2E8F0;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.06);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.85) 0%,
    rgba(15, 23, 42, 0.2)  60%,
    transparent            100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-zoom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
}

.gallery-cap-overlay {
  font-size: 11px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  width: 100%;
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 90vw;
  max-height: 90vh;
}

.lb-close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.lb-close:hover { background: rgba(255, 255, 255, 0.2); }

.lb-nav {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  flex-shrink: 0;
  line-height: 1;
}

.lb-nav:hover:not(:disabled) { background: rgba(255, 255, 255, 0.2); }
.lb-nav:disabled { opacity: 0.3; cursor: default; }

.lb-img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lb-img {
  max-width: 75vw;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 12px;
}

.lb-caption {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.lb-counter {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}
</style>