<template>
  <section id="hero" class="hero">
    <div class="hero-inner">

      <!-- Kiri: Text Content -->
      <div class="hero-content">

        <span class="hero-badge">
          ✦ Available for work
        </span>

        <h1 class="hero-name">
          Dennis Adzua<br />Firdaus
        </h1>

        <div class="hero-role">
          <span class="role-tag">Fullstack Developer</span>
          <span class="hero-location">📍 Bogor, Indonesia</span>
        </div>

        <p class="hero-desc">
          Seorang pengembang web yang memiliki minat dan semangat belajar yang sangat tinggi di bidang teknologi dan pengembangan aplikasi web. Berpengalaman membangun aplikasi yang bersih, modern, dan mudah digunakan, mulai dari admin dashboard, sistem POS, e-commerce, hingga landing page yang elegan. Berfokus pada Laravel dan Vue.js, serta selalu antusias mempelajari teknologi baru untuk menciptakan solusi digital yang efektif, efisien, dan bernilai bagi pengguna maupun bisnis.
        </p>

        <div class="hero-btns">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-outline">Contact Me</a>
        </div>

        <!-- Social Links -->
<div class="hero-socials">
  
    <a href="https://github.com/dennisadzuafirdaus-boop"
    target="_blank"
    class="social-btn"
    aria-label="GitHub"
  >
    <GithubIcon :size="18" />
  </a>

  
    <a href="https://linkedin.com/in/dennis-adzua-firdaus"
    target="_blank"
    class="social-btn"
    aria-label="LinkedIn"
  >
    <LinkedinIcon :size="18" />
  </a>

  
    <a href="https://instagram.com/adzuaaa"
    target="_blank"
    class="social-btn"
    aria-label="Instagram"
  >
    <InstagramIcon :size="18" />
  </a>
</div> 

      </div>

      <!-- Kanan: Avatar / Visual -->
      <div class="hero-visual">
        <div class="avatar-ring">
          <div class="avatar-box">
             <img :src="fotoporto" alt="Dennis Adzua Firdaus" class="avatar-img" />
          </div>
        </div>

        <!-- Floating info cards -->
        <div class="float-card card-top">
          <span class="float-icon">⚡</span>
          <div>
            <p class="float-title">Laravel + Vue.js</p>
            <p class="float-sub">Main Stack</p>
          </div>
        </div>

        <div class="float-card card-bottom">
          <span class="float-icon">🚀</span>
          <div>
            <p class="float-title">2+ Projects</p>
            <p class="float-sub">Delivered</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Github as GithubIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from 'lucide-vue-next'
import fotoporto from '@/assets/img/fotoporto.jpg'
</script>
<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 2rem 4rem;
  background-color: #FFFFFF;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── LEFT SIDE ── */
.hero-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #16A34A;
  background-color: #F0FDF4;
  border: 1px solid #BBF7D0;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.hero-name {
  font-size: 48px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.role-tag {
  font-size: 13px;
  font-weight: 600;
  color: #0F172A;
  background-color: #F1F5F9;
  padding: 4px 14px;
  border-radius: 999px;
}

.hero-location {
  font-size: 13px;
  color: #64748B;
}

.hero-desc {
  font-size: 15px;
  color: #64748B;
  line-height: 1.75;
  max-width: 460px;
  margin-bottom: 2rem;
}

.hero-btns {
  display: flex;
  gap: 12px;
  margin-bottom: 2rem;
}

.btn-primary {
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #0F172A;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.btn-primary:hover {
  background-color: #1E293B;
  transform: translateY(-1px);
}

.btn-outline {
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
  background-color: transparent;
  border: 1.5px solid #E2E8F0;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.15s ease;
}

.btn-outline:hover {
  border-color: #94A3B8;
  transform: translateY(-1px);
}

.hero-socials {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-socials {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1.5px solid #E2E8F0;
  color: #64748B;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.social-btn:hover {
  color: #0F172A;
  border-color: #0F172A;
  transform: translateY(-2px);
}

/* ── RIGHT SIDE ── */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-ring {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px dashed #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin-slow 20s linear infinite;
}

.avatar-box {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -1px;
  /* Counter-rotate supaya text tidak ikut muter */
  animation: counter-spin 20s linear infinite;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Floating cards */
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 10px 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.card-top {
  top: 10px;
  right: -10px;
  animation: float-y 3s ease-in-out infinite;
}

.card-bottom {
  bottom: 10px;
  left: -10px;
  animation: float-y 3s ease-in-out infinite 1.5s;
}

.float-icon {
  font-size: 20px;
}

.float-title {
  font-size: 13px;
  font-weight: 600;
  color: #0F172A;
}

.float-sub {
  font-size: 11px;
  color: #94A3B8;
}

/* ── RESPONSIVE MOBILE ── */
@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem 3rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  /* Foto/avatar pindah ke atas, konten teks di bawah */
  .hero-visual {
    order: -1;
  }

  .hero-name {
    font-size: 32px;
    letter-spacing: -1px;
  }

  .avatar-ring {
    width: 200px;
    height: 200px;
  }

  .avatar-box {
    width: 160px;
    height: 160px;
    font-size: 38px;
  }

  .float-card {
    display: none;
  }

  .hero-desc {
    font-size: 14px;
  }

  .hero-btns {
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-outline {
    flex: 1;
    text-align: center;
    justify-content: center;
  }
}
</style>