<template>
  <div class="certificates-page">
    <!-- Page Header -->
    <section class="cert-header">
      <div class="container">
        <span class="section-label">Achievements</span>
        <h2 class="section-title">
          My <span class="text-gradient">Certificates</span>
        </h2>
        <p class="cert-subtitle">
          A showcase of academic achievements and professional qualifications earned throughout my journey.
        </p>
      </div>
    </section>

    <!-- Certificates Grid -->
    <section class="cert-gallery">
      <div class="container">
        <div class="cert-grid">
          <a v-for="(cert, index) in certificates" :key="cert.title" class="cert-card glass-card"
            :class="{ 'featured': index === 0 }" :href="cert.pdf" target="_blank" rel="noopener">
            <!-- Card Accent -->
            <div class="card-accent" :style="{ background: cert.gradient }"></div>

            <!-- PDF Preview Panel (icon-based, no thumbnail needed) -->
            <div class="cert-image-wrapper">
              <div class="cert-pdf-panel" :style="{ background: cert.gradient }">
                <i class="bi bi-file-earmark-pdf-fill cert-pdf-icon"></i>
                <span class="cert-pdf-label">PDF Document</span>
              </div>
              <div class="cert-overlay">
                <span class="cert-type-badge" :style="{ background: cert.gradient }">
                  <i :class="cert.icon"></i>
                  {{ cert.type }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="cert-content">
              <h4 class="cert-title">{{ cert.title }}</h4>
              <div class="cert-institution">
                <i class="bi bi-building"></i>
                <span>{{ cert.institution }}</span>
              </div>
              <p class="cert-description" v-html="cert.description"></p>

              <!-- Skills gained -->
              <div v-if="cert.skills" class="cert-skills">
                <span v-for="skill in cert.skills" :key="skill" class="cert-skill-tag">
                  {{ skill }}
                </span>
              </div>

              <!-- View button -->
              <div class="cert-view-btn">
                <i class="bi bi-box-arrow-up-right"></i>
                View Certificate (PDF)
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const certificates = ref([
  {
    type: 'Academic Certificate',
    title: 'Certificate of Foundation Year One',
    institution: 'NPIC — National Polytechnic Institute of Cambodia',
    pdf: '/images/certificate_of_foundation_year_one.pdf',
    icon: 'bi bi-mortarboard',
    gradient: 'linear-gradient(135deg, #00b4d8, #7b68ee)',
    description:
      'Developed a core understanding of computational logic and basic programming structures. Focused on mastering the fundamentals of web architecture with HTML, CSS, JavaScript and C#.',
    skills: ['HTML', 'CSS', 'JavaScript', 'C#'],
  },
  {
    type: 'Language Certificate',
    title: 'Certificate Upper Intermediate',
    institution: 'ISS — International Standards School',
    pdf: '/images/certificate_upper_intermediate.pdf',
    icon: 'bi bi-translate',
    gradient: 'linear-gradient(135deg, #7b68ee, #e040fb)',
    description:
      'Long-term Academic Commitment: Successfully completed a comprehensive 12-level curriculum.<br><br>Advanced Proficiency: Currently placed in the Advanced class.',
    skills: ['English', 'Communication', 'Academic Writing'],
  },
  {
    type: 'Academic Certificate',
    title: 'Certificate Year 2',
    institution: 'NPIC — National Polytechnic Institute of Cambodia',
    pdf: '/images/certificate_y2.pdf',
    icon: 'bi bi-code-square',
    gradient: 'linear-gradient(135deg, #00e5a0, #00b4d8)',
    description:
      'Transitioned into more complex application logic and object-oriented programming using Java. Began working with server-side scripting in PHP and managing data with SQL.',
    skills: ['Java', 'PHP', 'SQL', 'OOP'],
  },
  {
    type: 'Teacher Certificate',
    title: 'Phnom Penh Teacher Education College',
    institution: 'Phnom Penh Teacher Education College',
    pdf: '/images/certificate_of_completion.pdf',
    icon: 'bi bi-person-video3',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    description:
      'Pedagogical Methodology: Learned various methods for delivering clear, engaging lessons to students.<br><br>Student-Centered Learning: Focused on understanding student needs.',
    skills: ['Teaching', 'Pedagogy', 'Student Assessment'],
  },
]);
</script>

<style scoped>
.cert-header {
  padding: 4rem 0 1rem;
}

.cert-subtitle {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  max-width: 550px;
  line-height: 1.7;
}

/* ==================== CERTIFICATE GRID ==================== */
.cert-gallery {
  padding: 2rem 0 4rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.cert-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
}

.card-accent {
  height: 4px;
  width: 100%;
  flex-shrink: 0;
}

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* ==================== PDF PANEL (replaces image thumbnail) ==================== */
.cert-image-wrapper {
  position: relative;
  overflow: hidden;
}

.cert-pdf-panel {
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0.9;
}

.cert-pdf-icon {
  font-size: 3rem;
  color: #fff;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.cert-pdf-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
}

.cert-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
}

.cert-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

/* ==================== CONTENT ==================== */
.cert-content {
  padding: 1.5rem 1.75rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cert-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  line-height: 1.35;
}

.cert-institution {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.cert-institution i {
  color: var(--color-accent);
  font-size: 0.85rem;
}

.cert-description {
  font-size: 0.88rem;
  color: var(--color-text-dim);
  line-height: 1.75;
  flex: 1;
  margin-bottom: 1.25rem;
}

/* ==================== SKILLS TAGS ==================== */
.cert-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
}

.cert-skill-tag {
  padding: 0.2rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 500;
  font-family: var(--font-mono);
  color: var(--color-accent);
  background: rgba(0, 180, 216, 0.06);
  border: 1px solid rgba(0, 180, 216, 0.12);
  border-radius: 4px;
}

/* ==================== VIEW BUTTON ==================== */
.cert-view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent);
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 992px) {
  .cert-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .cert-content {
    padding: 1.25rem;
  }
}
</style>
