<template>
  <footer class="site-footer">
    <div class="container">
      <div>© {{ year }} MIKMIKKK — Tous droits réservés</div>
      <div class="links">
        <a href="https://github.com/MIKMIKKK" target="_blank" rel="noreferrer">GitHub</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer{ padding:2rem 0; border-top:1px solid rgba(255,255,255,0.04); margin-top:3rem }
.site-footer .container{ display:flex; justify-content:space-between; align-items:center; max-width:1200px; margin:0 auto; padding:0 1rem }
.site-footer a{ color:var(--color-text); margin-left:1rem }
</style>
