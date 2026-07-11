<template>
  <section id="skills" class="skills">
    <div class="skills-inner">

      <!-- Section Label -->
      <div class="section-label fade-up">
        <span class="label-number">02</span>
        <span class="label-text">Skills</span>
      </div>

      <!-- Section Heading -->
      <div class="section-heading fade-up">
        <h2 class="skills-title">What I work with</h2>
        <p class="skills-subtitle">
          The tools and technologies I use every day to build web applications.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <div
          class="skill-card fade-up"
          v-for="(category, index) in skillCategories"
          :key="index"
        >
          <!-- Card Header -->
          <div class="card-header">
            <span class="card-icon">{{ category.icon }}</span>
            <span class="card-category">{{ category.category }}</span>
          </div>

          <!-- Skill Items -->
          <div class="skill-list">
            <div
              class="skill-item"
              v-for="skill in category.skills"
              :key="skill.name"
            >
              <!-- Skill Name + Level -->
              <div class="skill-meta">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>

              <!-- Progress Bar -->
              <div class="bar-bg">
                <div
                  class="bar-fill"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Data skills per kategori
const skillCategories = [
  {
    icon: '⚙️',
    category: 'Backend',
    skills: [
      { name: 'Laravel',    level: 60 },
      { name: 'PHP',        level: 60 },
      { name: 'REST API',   level: 30 },
    ],
  },
  {
    icon: '🎨',
    category: 'Frontend',
    skills: [
      { name: 'Vue.js',       level: 50 },
      { name: 'Tailwind CSS', level: 50 },
      { name: 'JavaScript',   level: 50 },
    ],
  },
  {
    icon: '🗄️',
    category: 'Database',
    skills: [
      { name: 'MySQL',        level: 70 },
      { name: 'Eloquent ORM', level: 50 },
    ],
  },
  {
    icon: '🛠️',
    category: 'Tools & Others',
    skills: [
      { name: 'Git',          level: 50 },
      { name: 'Laragon',      level: 70 },
      { name: 'Figma',        level: 50 },
    ],
  },
]
</script>

<style scoped>
.skills {
  padding: 6rem 2rem;
  background-color: #F8FAFC;
}

.skills-inner {
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

.skills-title {
  font-size: 32px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

.skills-subtitle {
  font-size: 15px;
  color: #64748B;
  line-height: 1.7;
}

/* ── Grid ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

/* ── Card ── */
.skill-card {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

/* ── Card Header ── */
.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #F1F5F9;
}

.card-icon {
  font-size: 20px;
}

.card-category {
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.2px;
}

/* ── Skill Items ── */
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 13px;
  font-weight: 600;
  color: #0F172A;
}

.skill-level {
  font-size: 12px;
  font-weight: 600;
  color: #94A3B8;
}

/* ── Progress Bar ── */
.bar-bg {
  width: 100%;
  height: 4px;
  background-color: #F1F5F9;
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background-color: #0F172A;
  border-radius: 999px;
  /* Animasi bar fill saat masuk viewport */
  transition: width 1s ease;
}
</style>