<template>
  <section id="home" class="hero-section" ref="root">
    <div class="inner">
      <h1 class="hero-title"><span class="gradient-title">Construire</span><br/>des expériences digitales précises</h1>
      <p class="tagline">Portfolio — Développement & Design</p>
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
.hero-section{ padding:15vh 0 20vh; display:flex; align-items:center; }
.inner{ width:100%; }
.hero-title{ font-size: clamp(3.2rem, 8vw, 6.4rem); line-height:0.92; letter-spacing:-1px; }
.tagline{ margin-top:1.4rem; font-size: var(--step-1); opacity:0.72 }
</style>
