<template>
  <section id="about" class="about-section" ref="root">
    <div class="inner">
      <header class="about-head">
        <h2 class="gradient-title">À propos</h2>
  <p class="intro">Étudiant en 3e année, je recherche une alternance en développement web. J’aime concevoir des interfaces performantes et maintenables (Vue, Laravel).</p>
      </header>
      <div class="grid">
        <div class="panel">
          <h3 class="panel-title">Compétences clés</h3>
          <ul class="skills">
            <li>Vue js</li>
            <li>Nuxt</li>
            <li>Laravel</li>
            <li>Github</li>
            <li>Tailwind</li>
            <li>Sass</li>
          </ul>
        </div>
        <div class="panel">
          <h3 class="panel-title">Soft skills</h3>
          <ul class="soft-list">
            <li>Travail en équipe</li>
            <li>Adaptabilité</li>
            <li>Communication claire</li>
          </ul>
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
.about-section{ padding:10rem 0 8rem; position:relative; }
.inner{ max-width:1320px; margin:0 auto; padding:0 2rem; }
.about-head{ max-width:940px; margin:0 0 4.5rem; }
.about-head h2{ margin:0 0 1.4rem; font-size:clamp(2.6rem,2.2rem + 3vw,4.4rem); }
.intro{ font-size:clamp(1.05rem,0.95rem + .6vw,1.45rem); line-height:1.55; opacity:.85; max-width:72ch; }
.grid{ display:grid; gap:3.5rem; }
.panel{ background:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.07); padding:2.2rem 2rem 2.4rem; border-radius:24px; position:relative; overflow:hidden; }
.panel:before{ content:""; position:absolute; inset:0; background:radial-gradient(circle at 85% 15%,rgba(255,255,255,0.08),transparent 60%); pointer-events:none; }
.panel-title{ margin:0 0 1.4rem; font-size:clamp(1.3rem,1.1rem + .9vw,2rem); letter-spacing:.5px; }
.skills{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:.75rem .9rem; }
.skills li{ background:rgba(255,255,255,0.06); padding:.65rem .85rem; border-radius:10px; font-size:.78rem; letter-spacing:.5px; text-transform:uppercase; font-weight:500; }
.approach{ font-size:clamp(.95rem,.9rem + .4vw,1.15rem); line-height:1.55; margin:0 0 1.9rem; max-width:50ch; }
.stats{ display:flex; flex-wrap:wrap; gap:1.6rem 2.6rem; }
.stat{ display:flex; flex-direction:column; }
.num{ font-size:clamp(1.6rem,1.3rem + 1.4vw,2.4rem); font-weight:600; background:linear-gradient(90deg,var(--color-heading-grad-from),var(--color-heading-grad-to)); -webkit-background-clip:text; background-clip:text; color:transparent; line-height:1; }
.label{ font-size:.68rem; letter-spacing:1px; opacity:.65; text-transform:uppercase; margin-top:.4rem; }
.soft-title{ margin:1.6rem 0 .6rem; font-size:clamp(1.05rem,1rem + .5vw,1.35rem); letter-spacing:.4px; opacity:.9 }
.soft-list{ list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; gap:.6rem }
.soft-list li{ background:rgba(255,255,255,0.06); padding:.55rem .85rem; border-radius:12px; font-size:.85rem; letter-spacing:.35px }
@media (min-width:960px){
  .grid{ grid-template-columns:1fr 1fr; align-items:start; }
}
</style>
