<template>
  <section id="projects" class="case-section" ref="root">
    <header class="section-head">
      <h2 class="gradient-title">Mes Projets</h2>
    </header>
    <div class="cases">
      <RouterLink :to="'/' + c.id" v-for="c in cases" :key="c.id" class="case" :ref="el => collectCaseEl(el)">
        <div class="case-media">
          <img :src="c.cover" :alt="'Couverture projet ' + c.title" loading="lazy" />
        </div>
        <div class="case-body">
          <h3>{{ c.title }}</h3>
          <p class="muted">{{ c.description }}</p>
          <ul class="meta">
            <li v-for="t in c.tags" :key="t">{{ t }}</li>
          </ul>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useGsapFadeStagger } from '../composables/useGsapReveal'
const root = ref(null)
const caseEls = ref([])
function collectCaseEl(el){
  if(el) caseEls.value.push(el)
}
// Build dynamic cases from data and assets
import { projects as fullProjects } from '../data/projects'
const assetsMap = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })
function normalize(str){
  return (str||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[\s_]+/g,'-').replace(/prenium/g,'premium')
}
const placeholder = '/placeholder.svg'
const cases = computed(()=>{
  return fullProjects.map(p=>{
    const slug = normalize(p.slug)
    const title = normalize(p.title)
    const matches = Object.entries(assetsMap)
      .filter(([path])=>{
        const low = path.toLowerCase()
        const normPath = low.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[\s_]+/g,'-')
        return low.includes(slug) || low.includes(title) || normPath.includes(slug) || normPath.includes(title)
      })
      .sort(([a],[b])=> a.localeCompare(b, undefined, { numeric:true, sensitivity:'base'}))
      .map(([,url])=> url)
    const cover = matches.find(u=> typeof u==='string') || (Array.isArray(p.gallery) ? p.gallery.find(u=> typeof u==='string' && !u.includes('placeholder')) : undefined) || placeholder
    const tags = p.stack || []
    return { id:p.slug, title:p.title, cover, description:p.description || p.tagline || '', tags }
  })
})
onMounted(()=>{
  useGsapFadeStagger(caseEls.value)
})
</script>

<style scoped>
.case-section{ padding:8rem 0 6rem; }
.section-head{ margin-bottom:3rem }
.cases{ display:grid; gap:4rem }
.case{ display:grid; gap:1.5rem; grid-template-columns:1fr; }
.case-media{ aspect-ratio:16/9; background:rgba(255,255,255,0.04); overflow:hidden; border-radius:14px; }
.case-media img{ width:100%; height:100%; object-fit:cover; filter:grayscale(15%); }
.case-body h3{ font-size:1.8rem; margin:0 0 0.6rem }
.case-body h3{ font-size: clamp(1.9rem, 1.3rem + 1.6vw, 2.4rem); margin:0 0 0.6rem; line-height:1.05 }
.meta{ list-style:none; display:flex; gap:.75rem; padding:0; margin:1rem 0 0 }
.meta li{ background:rgba(255,255,255,0.08); padding:.4rem .8rem; border-radius:40px; font-size:.7rem; letter-spacing:.5px }
.meta li{ background:rgba(255,255,255,0.08); padding:.45rem .9rem; border-radius:40px; font-size:.68rem; letter-spacing:.6px; text-transform:uppercase }
@media (min-width: 860px){
  .cases{ gap:6rem }
  .case{ grid-template-columns: 58% 1fr; align-items:center; }
  .case:nth-child(even){ grid-template-columns: 1fr 58%; }
  .case:nth-child(even) .case-media{ order:2 }
}
</style>
