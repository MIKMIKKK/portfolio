<template>
  <header class="site-header">
    <div class="container">
      <RouterLink class="brand" to="/"><img src="/src/assets/logo.png" alt="logo"></RouterLink>
      <nav>
        <a href="#home" @click.prevent="goTo('#home')">Accueil</a>
        <a href="#projects" @click.prevent="goTo('#projects')">Projets</a>
        <a href="#about" @click.prevent="goTo('#about')">À propos</a>
        <a href="#contact" @click.prevent="goTo('#contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

async function goTo(hash){
  if(route.path !== '/'){
    // Aller à home avec hash; scrollBehavior gérera le scroll
    await router.push({ path: '/', hash })
  } else {
    // Sur la home déjà : scroll direct
    const el = document.querySelector(hash)
    if(el) el.scrollIntoView({ behavior:'smooth', block:'start' })
    history.replaceState(null,'',hash) // mettre à jour l'URL sans rechargement
  }
}
</script>

<style scoped>
.site-header{
  position: sticky;
  top: 0;
  backdrop-filter: blur(6px);
  background: linear-gradient(180deg, rgba(3,15,26,0.6), rgba(3,15,26,0.3));
  border-bottom: 1px solid rgba(255,255,255,0.03);
  z-index: 60;
}
.site-header .container{ display:flex; align-items:center; justify-content:space-between; max-width:1200px; margin:0 auto; padding:0.75rem 1rem }
.brand{ font-weight:700; letter-spacing:0.6px; font-size:var(--step-1); text-decoration:none; color:var(--color-text); }
nav a{ color:var(--color-text); text-decoration:none; margin-left:1.25rem; font-size:var(--step-0); line-height:1; position:relative }
nav a:after{ content:""; position:absolute; left:0; bottom:-6px; height:1px; width:0; background:linear-gradient(90deg,var(--color-heading-grad-from),var(--color-heading-grad-to)); transition:width .35s ease }
nav a:hover:after{ width:100%; }
@media (min-width:900px){
  .brand{ font-size:var(--step-2); }
  nav a{ font-size:calc(var(--step-0) * 1.02); }
}
nav a:hover{ opacity:0.9 }
</style>
