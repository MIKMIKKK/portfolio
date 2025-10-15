<template>
  <section id="projects" class="section">
    <header>
      <h2 class="gradient-title">Projets</h2>
      <p class="muted">Sélection de projets réalisés</p>
    </header>

    <div class="projects-grid">
      <ProjectCard v-for="p in items" :key="p.id" :title="p.title" :short="p.short" :image="p.image" />
    </div>

    <!-- Details area -->
    <div style="margin-top:2.5rem; display:grid; gap:1.5rem">
      <div v-for="p in items" :key="p.id" class="project-detail">
        <h3 class="gradient-title">{{ p.title }}</h3>
        <div class="muted">{{ p.description }}</div>

        <div style="display:flex; gap:1rem; margin-top:0.75rem; flex-wrap:wrap">
          <div style="min-width:220px">
            <strong>Style</strong>
            <div style="margin-top:0.5rem">
              <div>Typo: {{ p.style?.font }}</div>
              <div>Couleurs:</div>
              <div style="display:flex; gap:0.5rem; margin-top:0.5rem">
                <div v-for="c in (p.style?.colors||[])" :key="c" :style="{width:'44px',height:'28px',background:c,borderRadius:'6px',border:'1px solid rgba(255,255,255,0.06)'}"></div>
              </div>
            </div>
          </div>

          <div style="flex:1">
            <strong>Galerie</strong>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:0.5rem; margin-top:0.5rem">
              <div v-for="(img,i) in p.gallery" :key="i" style="height:100px; background:rgba(255,255,255,0.03); border-radius:6px; display:flex;align-items:center;justify-content:center;overflow:hidden">
                <img :src="img" alt="gallery" style="width:100%;height:100%;object-fit:cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { projects as fullProjects } from '../data/projects'

// Charge automatiquement les images depuis src/assets si le nom contient le slug/titre
const assetsMap = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })
function normalize(str){
  return (str||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,'-').replace(/prenium/g,'premium')
}
const dataUrlPlaceholder = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#B5DFCA"/><stop offset="1" stop-color="#DB91D2"/></linearGradient></defs><rect width="100%" height="100%" fill="#0B1622"/><rect x="20" y="20" width="760" height="460" rx="16" fill="url(#g)" opacity="0.15"/></svg>')

const items = computed(()=>{
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
    const dataGallery = Array.isArray(p.gallery) ? p.gallery : []
    const gallery = matches.length ? matches : dataGallery
    const pick = (arr)=> arr.find(u=> typeof u==='string' && !u.includes('placeholder'))
    const image = pick(gallery) || pick(dataGallery) || dataUrlPlaceholder
    const short = p.tagline || (p.description ? p.description : '')
    return { id:p.slug, title:p.title, short, image, description:p.description, style:p.style, gallery }
  })
})
</script>

<style scoped>
.project-detail{ padding:1rem 0; border-top:1px dashed rgba(255,255,255,0.03) }
.project-detail h3{ margin-bottom:0.25rem }
</style>
