<template>
  <section id="contact" class="contact-section" ref="root">
    <div class="inner">
      <header class="contact-head">
        <h2 class="gradient-title">Travaillons ensemble</h2>
        <p class="tag">Un projet, une idée, une collaboration ? Je suis ouvert aux échanges pour créer des interfaces fluides et utiles.</p>
      </header>
      <div class="contact-grid">
        <div class="contact-main">
          <p class="cta-text">Expliquez-moi rapidement votre besoin et je reviens vers vous.
          </p>
          <div class="actions">
            <a class="contact-btn primary" href="mailto:yoanfleuret10@gmail.com">Écrire un email</a>
            <a class="contact-btn alt" href="#" aria-disabled="true">Calendrier (bientôt)</a>
          </div>
        </div>
        <div class="contact-side">
          <ul class="info">
            <li><span class="label">Email</span><a href="mailto:yoan@example.com">yoanfleuret10@gmail.com</a></li>
            <li><span class="label">Localisation</span><span>Paris</span></li>
            <li><span class="label">Disponibilité</span><span>Ouvert à missions</span></li>
          </ul>
          <div class="socials">
            <a href="https://github.com/MIKMIKKK" aria-label="GitHub" class="social-pill">GitHub</a>
            <a href="https://www.linkedin.com/in/yoan-fleuret/" aria-label="LinkedIn" class="social-pill">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGsapReveal } from '../composables/useGsapReveal'
const root = ref(null)
onMounted(()=> useGsapReveal(root.value))
</script>

<style scoped>
.contact-section{ padding:11rem 0 12rem; position:relative; }
.inner{ max-width:1320px; margin:0 auto; padding:0 2rem; }
.contact-head{ max-width:900px; margin:0 0 4rem; }
.contact-head h2{ margin:0 0 1.2rem; font-size:clamp(2.5rem,2.1rem + 3vw,4.2rem); }
.tag{ font-size:clamp(1.05rem,0.95rem + .55vw,1.4rem); line-height:1.55; opacity:.8; }
.contact-grid{ display:grid; gap:3.5rem; }
.cta-text{ font-size:clamp(1rem,.95rem + .5vw,1.3rem); line-height:1.6; margin:0 0 2rem; opacity:.85 }
.actions{ display:flex; flex-wrap:wrap; gap:1rem 1.2rem; }
.contact-btn{ display:inline-flex; align-items:center; justify-content:center; padding:1rem 1.9rem; border:1px solid rgba(255,255,255,0.25); border-radius:46px; text-decoration:none; font-size:.9rem; letter-spacing:.6px; backdrop-filter:blur(6px); position:relative; overflow:hidden; }
.contact-btn.primary{ background:linear-gradient(90deg,var(--color-heading-grad-from),var(--color-heading-grad-to)); color:#030F1A; font-weight:600; border:none; }
.contact-btn.alt{ background:rgba(255,255,255,0.07); }
.contact-btn:hover{ opacity:.92 }
.contact-side{ display:flex; flex-direction:column; gap:2.2rem; }
.info{ list-style:none; margin:0; padding:0; display:grid; gap:1rem; font-size:.85rem; }
.info .label{ display:block; font-size:.65rem; opacity:.55; letter-spacing:1px; text-transform:uppercase; margin-bottom:.25rem }
.socials{ display:flex; flex-wrap:wrap; gap:.75rem; }
.social-pill{ display:inline-block; padding:.55rem 1rem; font-size:.72rem; letter-spacing:.6px; background:rgba(255,255,255,0.08); border-radius:32px; text-decoration:none; text-transform:uppercase; }
.social-pill:hover{ background:rgba(255,255,255,0.14); }
@media (min-width:960px){
  .contact-grid{ grid-template-columns:1fr 360px; align-items:start; }
  .contact-head{ margin-bottom:5rem; }
}
</style>
