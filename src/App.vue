<template>
  <div class="app-container">
    <!-- Floating Particles Background -->
    <div class="particles" aria-hidden="true">
      <div v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></div>
    </div>

    <!-- Navigation -->
    <nav class="navbar-custom">
      <div class="nav-inner container d-flex align-items-center justify-content-between">
        <a href="#" class="nav-brand" @click.prevent="currentView = 'home'">
          <span class="brand-first">TENG</span>
          <span class="brand-accent">SOPHANITH</span>
        </a>
        <div class="nav-links">
          <button
            class="nav-link-btn"
            :class="{ active: currentView === 'home' }"
            @click="currentView = 'home'"
          >
            <i class="bi bi-person-workspace"></i>
            <span>Profile</span>
          </button>
          <button
            class="nav-link-btn"
            :class="{ active: currentView === 'certificates' }"
            @click="currentView = 'certificates'"
          >
            <i class="bi bi-award"></i>
            <span>Certificates</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Dynamic View with transition -->
    <main class="main-content">
      <transition name="page-fade" mode="out-in">
        <Home v-if="currentView === 'home'" key="home" />
        <Certificates v-else-if="currentView === 'certificates'" key="certificates" />
      </transition>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-glow"></div>
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <h4 class="footer-logo">
              TENG <span class="accent">SOPHANITH</span>
            </h4>
            <p class="footer-tagline">Full-Stack Software Developer</p>
          </div>

          <div class="footer-contact">
            <div class="contact-item">
              <i class="bi bi-telephone-fill"></i>
              <span>085 283 851</span>
            </div>
            <div class="contact-item">
              <i class="bi bi-envelope-fill"></i>
              <span>tengsophanith@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="bi bi-geo-alt-fill"></i>
              <span>ផ្លូវ លំ ផ្ទះលេខ ៦០ សង្កាត់គោកឃ្ឡាំង ភ្នំពេញ, Cambodia</span>
            </div>
          </div>

          <div class="footer-social">
            <a href="mailto:tengsophanith@gmail.com" class="social-link" aria-label="Email">
              <i class="bi bi-envelope"></i>
            </a>
            <a href="https://github.com/sophanithteng" target="_blank" class="social-link" aria-label="GitHub">
              <i class="bi bi-github"></i>
            </a>
          </div>

          <div class="footer-divider"></div>
          <p class="footer-copy">&copy; {{ new Date().getFullYear() }} Teng Sophanith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import Certificates from './components/Certificates.vue';

const currentView = ref('home');

function particleStyle(n) {
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const delay = Math.random() * 20;
  const duration = Math.random() * 15 + 10;
  const opacity = Math.random() * 0.3 + 0.05;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity,
  };
}
</script>

<style>
/* ============================================
   DESIGN SYSTEM — CSS CUSTOM PROPERTIES
   ============================================ */
:root {
  --color-bg: #050a18;
  --color-bg-alt: #0a1128;
  --color-surface: rgba(15, 25, 50, 0.6);
  --color-surface-hover: rgba(20, 35, 65, 0.8);
  --color-border: rgba(100, 180, 255, 0.08);
  --color-border-hover: rgba(100, 180, 255, 0.2);
  --color-accent: #00b4d8;
  --color-accent-2: #7b68ee;
  --color-accent-3: #00e5a0;
  --color-text: #e2e8f0;
  --color-text-muted: #7a8ba8;
  --color-text-dim: #4a5568;
  --gradient-primary: linear-gradient(135deg, #00b4d8 0%, #7b68ee 50%, #00e5a0 100%);
  --gradient-accent: linear-gradient(135deg, #00b4d8 0%, #7b68ee 100%);
  --gradient-glow: radial-gradient(ellipse at center, rgba(0, 180, 216, 0.15) 0%, transparent 70%);
  --shadow-card: 0 4px 30px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 40px rgba(0, 180, 216, 0.1);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --font-sans: 'Inter', 'Noto Sans Khmer', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ============================================
   RESET & GLOBALS
   ============================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* ============================================
   FLOATING PARTICLES
   ============================================ */
.particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  bottom: -10px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: float-up linear infinite;
}

@keyframes float-up {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(-100vh) scale(0.5);
    opacity: 0;
  }
}

/* ============================================
   NAVIGATION
   ============================================ */
.navbar-custom {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(5, 10, 24, 0.75);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 0;
}

.nav-brand {
  text-decoration: none;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  display: flex;
  gap: 0.5rem;
}

.brand-first {
  color: var(--color-text);
}

.brand-accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link-btn {
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link-btn:hover {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-btn.active {
  color: #fff;
  background: var(--gradient-accent);
  box-shadow: 0 4px 20px rgba(0, 180, 216, 0.3);
}

/* ============================================
   MAIN CONTENT
   ============================================ */
.main-content {
  position: relative;
  z-index: 1;
  min-height: 70vh;
}

/* ============================================
   PAGE TRANSITIONS
   ============================================ */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ============================================
   SHARED UTILITIES
   ============================================ */
.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.section-label::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  line-height: 1.2;
}

.glass-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-card);
  transition: all var(--transition-smooth);
}

.glass-card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card), var(--shadow-glow);
}

/* ============================================
   FOOTER
   ============================================ */
.site-footer {
  position: relative;
  z-index: 1;
  margin-top: 6rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  background: var(--gradient-glow);
  pointer-events: none;
}

.footer-inner {
  position: relative;
  padding: 4rem 0 2rem;
  text-align: center;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.footer-logo .accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.footer-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.88rem;
}

.contact-item i {
  color: var(--color-accent);
  font-size: 1rem;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: #fff;
  background: var(--gradient-accent);
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 180, 216, 0.3);
}

.footer-divider {
  height: 1px;
  background: var(--color-border);
  margin-bottom: 1.5rem;
}

.footer-copy {
  color: var(--color-text-dim);
  font-size: 0.8rem;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .nav-brand {
    font-size: 1rem;
  }

  .nav-link-btn span {
    display: none;
  }

  .nav-link-btn {
    padding: 0.5rem 0.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .footer-contact {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

/* ============================================
   SCROLLBAR
   ============================================ */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 180, 255, 0.15);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 180, 255, 0.3);
}
</style>
