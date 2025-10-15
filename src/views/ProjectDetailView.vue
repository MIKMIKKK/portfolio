<template>
  <div class="project-page" v-if="project">
    <header class="project-hero">
      <h1 class="gradient-title">{{ project.title }}</h1>
      <p class="tagline">{{ project.tagline }}</p>
      <ul class="meta">
        <li><strong>Année:</strong> {{ project.year }}</li>
        <li><strong>Rôle:</strong> {{ project.role }}</li>
        <li><strong>Stack:</strong> {{ project.stack.join(', ') }}</li>
      </ul>
    </header>

    <section class="content">
      <h2 class="gradient-title">Contexte</h2>
      <p class="muted">{{ project.description }}</p>

      <h3 style="margin-top:3rem" class="gradient-title">Style</h3>
      <div class="style">
        <div class="colors">
          <div v-for="c in project.style.colors" :key="c" :style="{background:c}" class="color-swatch"></div>
        </div>
        <div class="font muted">Typo: {{ project.style.font }}</div>
      </div>

      <h3 style="margin-top:3rem" class="gradient-title">Galerie</h3>
      <div class="gallery">
        <div v-for="(img,i) in project.gallery" :key="i" class="g-item">
          <img :src="img" alt="image du projet" />
        </div>
      </div>
    </section>

    <footer class="back-link">
      <RouterLink to="/">← Retour</RouterLink>
    </footer>
  </div>
  <div v-else class="project-page">
    <p>Projet introuvable.</p>
    <RouterLink to="/">Retour</RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { findProject } from '../data/projects'
import { computed } from 'vue'
const route = useRoute()
const project = computed(()=> findProject(route.params.slug))
</script>

<style scoped>
.project-page{ max-width:1100px; margin:0 auto; padding:6rem 1.25rem 8rem }
.project-hero{ margin-bottom:4rem }
.project-hero h1{ font-size: clamp(2.4rem, 5vw, 4.2rem); line-height:1.02 }
.tagline{ margin-top:1rem; font-size:var(--step-1); opacity:.75 }
.meta{ list-style:none; display:flex; flex-wrap:wrap; gap:1.2rem; padding:0; margin:1.8rem 0 0; font-size:.75rem; letter-spacing:.5px; text-transform:uppercase; opacity:.7 }
.content h2{ margin-bottom:1rem }
.style{ display:flex; align-items:center; gap:2rem; margin-top:1rem }
.colors{ display:flex; gap:.65rem }
.color-swatch{ width:56px; height:56px; border-radius:10px; border:1px solid rgba(255,255,255,0.08) }
.gallery{ display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); margin-top:1rem }
.g-item{ aspect-ratio:16/10; background:rgba(255,255,255,0.05); border-radius:12px; overflow:hidden; }
.g-item img{ width:100%; height:100%; object-fit:cover }
.back-link{ margin-top:5rem; font-size:var(--step--1) }
</style>