<template>
  <div class="home-page">
    <!-- ==================== HERO SECTION ==================== -->
    <section class="hero-section">
      <div class="hero-bg-orbs" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>

      <div class="container">
        <div class="hero-grid">
          <!-- Profile Photo -->
          <div class="hero-photo-col">
            <div class="photo-frame">
              <div class="photo-ring"></div>
              <img src="/images/TENG_SOPHANITH.JPG" alt="Teng Sophanith - Junior Android Developer"
                class="profile-photo" />
              <div class="photo-badge">
                <i class="bi bi-code-slash"></i>
              </div>
            </div>
            <div class="status-indicator">
              <span class="status-dot"></span>
              Available for work
            </div>
          </div>

          <!-- Hero Content -->
          <div class="hero-content-col">
            <div class="hero-intro">
              <span class="section-label">Welcome to my portfolio</span>
              <h1 class="hero-title">
                Hi, I'm <span class="text-gradient">Teng Sophanith</span>
              </h1>
              <div class="hero-role">
                <span class="role-prefix">&lt;</span>
                <span class="role-text">{{ displayText }}<span class="cursor">|</span></span>
                <span class="role-prefix">/&gt;</span>
              </div>
              <p class="hero-desc">
                Aspiring Junior Android Developer with a foundation in programming and application
                development. Familiar with Kotlin, Flutter, and Dart, with hands-on experience building
                web projects using PHP, JavaScript, Vue.js, React.js, Laravel, and MySQL.
              </p>
              <div class="hero-actions">
                <a href="mailto:tengsophanith@gmail.com" class="btn-primary-custom">
                  <i class="bi bi-send"></i> Get in Touch
                </a>
                <a href="#projects" class="btn-outline-custom" @click.prevent="scrollToProjects">
                  <i class="bi bi-folder2-open"></i> View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SKILLS SECTION ==================== -->
    <section class="skills-section">
      <div class="container">
        <span class="section-label">What I do</span>
        <h2 class="section-title">
          Technical <span class="text-gradient">Skills</span>
        </h2>

        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card glass-card">
            <div class="skill-icon" :style="{ background: skill.gradient }">
              <i :class="skill.icon"></i>
            </div>
            <h4 class="skill-name">{{ skill.name }}</h4>
            <p class="skill-desc">{{ skill.desc }}</p>
            <div class="skill-tags">
              <span v-for="tag in skill.tags" :key="tag" class="skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== EDUCATION SECTION ==================== -->
    <section class="education-section">
      <div class="container">
        <span class="section-label">My journey</span>
        <h2 class="section-title">
          Education & <span class="text-gradient">Experience</span>
        </h2>

        <div class="timeline">
          <div v-for="(edu, index) in education" :key="edu.title" class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div v-if="index < education.length - 1" class="marker-line"></div>
            </div>
            <div class="timeline-content glass-card">
              <div class="timeline-header">
                <span class="timeline-badge">{{ edu.period }}</span>
                <span v-if="edu.current" class="current-badge">Current</span>
              </div>
              <h4 class="timeline-title">{{ edu.title }}</h4>
              <p class="timeline-institution">
                <i class="bi bi-building"></i> {{ edu.institution }}
              </p>
              <p class="timeline-desc">{{ edu.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PROJECTS SECTION ==================== -->
    <section class="projects-section" id="projects">
      <div class="container">
        <span class="section-label">My work</span>
        <h2 class="section-title">
          Featured <span class="text-gradient">Projects</span>
        </h2>

        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card glass-card">
            <div class="project-header">
              <div class="project-icon" :style="{ background: project.gradient }">
                <i :class="project.icon"></i>
              </div>
              <span class="project-type">{{ project.type }}</span>
            </div>
            <h4 class="project-title">{{ project.title }}</h4>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
              <span>View Live</span>
              <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Typewriter effect
const roles = ['Junior Android Developer', 'Flutter Developer', 'Web Developer', 'Problem Solver'];
const displayText = ref('');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingInterval = null;
let pauseTimeout = null;

function clearTypingTimers() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  if (pauseTimeout) {
    clearTimeout(pauseTimeout);
    pauseTimeout = null;
  }
}

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    displayText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      clearTypingTimers();
      pauseTimeout = setTimeout(() => {
        typingInterval = setInterval(typeEffect, 40);
      }, 2000);
      return;
    }
  } else {
    displayText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      clearTypingTimers();
      pauseTimeout = setTimeout(() => {
        typingInterval = setInterval(typeEffect, 80);
      }, 500);
      return;
    }
  }
}

onMounted(() => {
  typingInterval = setInterval(typeEffect, 80);
});

onUnmounted(() => {
  clearTypingTimers();
});

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

// Skills Data
const skills = ref([
  {
    name: 'Mobile Development',
    icon: 'bi bi-phone',
    gradient: 'linear-gradient(135deg, #00e5a0, #00b87c)',
    desc: 'Learning to build cross-platform and Android apps with a focus on clean, usable interfaces.',
    tags: ['Flutter', 'Dart', 'Kotlin'],
  },
  {
    name: 'Frontend Development',
    icon: 'bi bi-palette',
    gradient: 'linear-gradient(135deg, #00b4d8, #0077b6)',
    desc: 'Creating responsive, modern user interfaces with clean code and smooth interactions.',
    tags: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React.js', 'Bootstrap'],
  },
  {
    name: 'Backend & Tools',
    icon: 'bi bi-hdd-stack',
    gradient: 'linear-gradient(135deg, #7b68ee, #5a4fcf)',
    desc: 'Building server-side applications with databases, plus tools for development and design.',
    tags: ['PHP', 'Laravel', 'Node.js', 'C#', '.NET', 'MySQL', 'Docker', 'Photoshop', 'Illustrator'],
  },
]);

// Education Data
const education = ref([
  {
    title: 'Computer Science',
    institution: 'NPIC — National Polytechnic Institute of Cambodia',
    period: '2023 — Present',
    current: true,
    desc: 'Completed Foundation Year One (Dec 2024). Studying programming, databases, and application development.',
  },
  {
    title: 'General English Program',
    institution: 'International Standard School (ISS)',
    period: '2023 — Present',
    current: true,
    desc: 'Earned the Upper-Intermediate Certificate (July 2025).',
  },
  {
    title: 'Short-Term Professional Development',
    institution: 'Phnom Penh Teacher Education College',
    period: 'Jul — Oct 2024',
    current: false,
    desc: 'Completed a short-term professional development program (certificate issued Oct 2024).',
  },
  {
    title: 'High School',
    institution: 'Hun Sen New Phnom Penh High School',
    period: '2020 — 2023',
    current: false,
    desc: 'Completed secondary and high school education.',
  },
]);

// Projects Data
const projects = ref([
  {
    title: 'Full-Stack Chat System',
    type: 'Full-Stack Web App',
    icon: 'bi bi-chat-dots',
    gradient: 'linear-gradient(135deg, #00e5a0, #7b68ee)',
    desc: 'A full-stack chat application with a Laravel backend, Vue.js frontend, MySQL storage, and a Docker development environment.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    link: '', // add a GitHub or live link when you have one
  },
  {
    title: 'NPIC Student Management System',
    type: 'Full-Stack Web App',
    icon: 'bi bi-mortarboard',
    gradient: 'linear-gradient(135deg, #00b4d8, #7b68ee)',
    desc: 'A student information system for entering, displaying, and managing student records, with PHP/MySQL logic and React.js components in parts of the UI.',
    tech: ['PHP', 'MySQL', 'React.js', 'JavaScript'],
    link: 'https://npicstudent.lovestoblog.com/npicstudent/?page=login',
  },
  {
    title: 'To-Do List Application',
    type: 'Full-Stack Web App',
    icon: 'bi bi-check2-square',
    gradient: 'linear-gradient(135deg, #7b68ee, #e040fb)',
    desc: 'A task manager with full CRUD: add, update, and delete tasks, with an interactive JavaScript front end.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    link: '',
  },
  {
    title: 'Emilia Computer Store',
    type: 'Frontend Project',
    icon: 'bi bi-display',
    gradient: 'linear-gradient(135deg, #00e5a0, #00b4d8)',
    desc: 'A responsive e-commerce storefront interface with product displays and clear page layouts.',
    tech: ['HTML', 'CSS'],
    link: 'https://sophanithteng.github.io/emiliacomputerstore.githu.io/',
  },
]);
</script>

<style scoped>
/* ==================== HERO ==================== */
.hero-section {
  position: relative;
  padding: 5rem 0 4rem;
  overflow: hidden;
}

.hero-bg-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(0, 180, 216, 0.2);
  top: -100px;
  right: -100px;
  animation: orb-float 8s ease-in-out infinite;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(123, 104, 238, 0.15);
  bottom: -50px;
  left: -50px;
  animation: orb-float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(0, 229, 160, 0.12);
  top: 50%;
  left: 40%;
  animation: orb-float 12s ease-in-out infinite;
}

@keyframes orb-float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -20px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-photo-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.photo-frame {
  position: relative;
  width: 220px;
  height: 220px;
}

.photo-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: var(--gradient-primary);
  animation: ring-spin 6s linear infinite;
  opacity: 0.6;
}

@keyframes ring-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.photo-ring::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: var(--color-bg);
  border-radius: 50%;
}

.profile-photo {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
}

.photo-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 180, 216, 0.4);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00e5a0;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4);
  }

  50% {
    box-shadow: 0 0 0 6px rgba(0, 229, 160, 0);
  }
}

.hero-intro {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.hero-role {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.role-prefix {
  color: var(--color-text-dim);
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--color-accent);
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.hero-desc {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary-custom {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--gradient-accent);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 20px rgba(0, 180, 216, 0.25);
}

.btn-primary-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 180, 216, 0.4);
  color: #fff;
}

.btn-outline-custom {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.btn-outline-custom:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
  color: var(--color-text);
}

/* ==================== SKILLS ==================== */
.skills-section {
  padding: 5rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-card {
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-smooth);
}

.skill-card:hover::before {
  transform: scaleX(1);
}

.skill-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
}

.skill-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.skill-desc {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent);
  background: rgba(0, 180, 216, 0.08);
  border: 1px solid rgba(0, 180, 216, 0.15);
  border-radius: 999px;
}

/* ==================== EDUCATION ==================== */
.education-section {
  padding: 5rem 0;
}

.timeline {
  max-width: 700px;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gradient-accent);
  box-shadow: 0 0 12px rgba(0, 180, 216, 0.4);
  flex-shrink: 0;
  margin-top: 1.75rem;
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  margin: 0.25rem 0;
}

.timeline-content {
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.timeline-badge {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-accent);
  padding: 0.25rem 0.75rem;
  background: rgba(0, 180, 216, 0.08);
  border: 1px solid rgba(0, 180, 216, 0.15);
  border-radius: 999px;
}

.current-badge {
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
  padding: 0.2rem 0.6rem;
  background: var(--gradient-accent);
  border-radius: 999px;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.timeline-institution {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.timeline-institution i {
  color: var(--color-accent);
  font-size: 0.85rem;
}

.timeline-desc {
  font-size: 0.88rem;
  color: var(--color-text-dim);
  line-height: 1.7;
  margin-bottom: 0;
}

/* ==================== PROJECTS ==================== */
.projects-section {
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.project-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-smooth);
}

.project-card:hover::after {
  transform: scaleX(1);
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.project-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
}

.project-type {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-accent);
  padding: 0.2rem 0.75rem;
  border: 1px solid rgba(0, 180, 216, 0.2);
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.25rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.project-link i {
  transition: transform var(--transition-fast);
}

.project-link:hover {
  color: #fff;
}

.project-link:hover i {
  transform: translate(3px, -3px);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .hero-photo-col {
    order: -1;
  }

  .hero-intro {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-role {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .photo-frame {
    width: 180px;
    height: 180px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
