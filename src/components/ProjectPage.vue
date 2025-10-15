<template>
  <div class="project-shell" v-if="project">
    <header class="hero">
      <h1 class="title gradient-title">{{ project.title }}</h1>
      <p class="subtitle">{{ project.tagline }}</p>
      <ul class="meta-inline">
        <li>{{ project.year }}</li>
        <li>{{ project.role }}</li>
        <li v-if="project.projectType==='internship'" class="badge">Stage</li>
      </ul>
    </header>
    <main class="content">
      <section class="block" v-if="project.context || project.description">
        <h2>Contexte</h2>
        <p class="lead" v-if="project.context">{{ project.context }}</p>
        <p class="lead" v-else>{{ project.description }}</p>
      </section>
      <section class="block" v-if="project.functionalities?.length">
        <h2>Fonctionnalités</h2>
        <ul class="pill-list">
          <li v-for="f in project.functionalities" :key="f">{{ f }}</li>
        </ul>
      </section>
      <section class="block" v-if="galleryImages?.length">
        <h2>Galerie</h2>
        <div class="gallery">
          <button v-for="(img,i) in galleryImages" :key="i" class="g-item" @click="open(i)">
            <img :src="img" :alt="project.title + ' image ' + (i+1)" />
          </button>
        </div>
      </section>
      <nav class="nav-pagination" v-if="next || prev">
        <RouterLink v-if="prev" :to="'/' + prev.slug" class="prev">← {{ prev.title }}</RouterLink>
        <RouterLink v-if="next" :to="'/' + next.slug" class="next">{{ next.title }} →</RouterLink>
      </nav>
      <RouterLink to="/" class="back-link">Retour</RouterLink>
    </main>
    <Lightbox v-if="lightbox.open" :images="galleryImages" :index="lightbox.index" @close="close" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { projects } from '../data/projects'
import Lightbox from './Lightbox.vue'
const props = defineProps({ slug: { type:String, required:true } })
const project = computed(()=> projects.find(p=> p.slug===props.slug))
const idx = computed(()=> projects.findIndex(p=> p.slug===props.slug))
const prev = computed(()=> idx.value>0 ? projects[idx.value-1] : null)
const next = computed(()=> idx.value<projects.length-1 ? projects[idx.value+1] : null)
const lightbox = reactive({ open:false, index:0 })
function open(i){ lightbox.open=true; lightbox.index=i }
function close(){ lightbox.open=false }
const assetsMap = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })
function normalize(str){
  return (str || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/prenium/g, 'premium')
}
const galleryImages = computed(() => {
  const p = project.value
  if (!p) return []
  const slug = normalize(p.slug)
  const title = normalize(p.title)
  const entries = Object.entries(assetsMap)
  const matches = entries
    .filter(([path]) => {
      const low = path.toLowerCase()
      return low.includes(slug) || low.includes(title)
    })
    .sort(([a],[b]) => a.localeCompare(b, undefined, { numeric:true, sensitivity:'base' }))
    .map(([,url]) => url)
  return matches.length ? matches : (Array.isArray(p.gallery) ? p.gallery : [])
})
</script>

<style scoped>
.project-shell{ position:relative; max-width:1380px; margin:0 auto; padding:5rem 1.2rem 5rem }
.hero{ margin-bottom:2.2rem }
.title{ font-size:clamp(2.8rem,2.1rem + 3.8vw,4.6rem); line-height:.95; letter-spacing:-.5px; margin:0 0 .6rem }
.subtitle{ font-size:clamp(1.05rem,0.98rem + .5vw,1.4rem); max-width:70ch; opacity:.9; margin:0 0 .8rem }
.meta-inline{ list-style:none; display:flex; flex-wrap:wrap; gap:.5rem .8rem; margin:0; padding:0; font-size:.75rem; letter-spacing:.4px; opacity:.85 }
.meta-inline .badge{ background:linear-gradient(90deg,var(--color-heading-grad-from),var(--color-heading-grad-to)); color:#030F1A; font-weight:600; padding:.3rem .55rem; border-radius:14px; font-size:.62rem }
.content{ display:flex; flex-direction:column; gap:2.4rem }
.block h2{ font-size:clamp(1.5rem,1.2rem + 1.6vw,2.4rem); margin:0 0 .8rem }
.lead{ font-size:clamp(1.05rem,.98rem + .5vw,1.35rem); line-height:1.65; opacity:.92; margin:0 }
.pill-list{ list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; gap:.55rem }
.pill-list li{ background:rgba(255,255,255,0.06); padding:.55rem .9rem; font-size:.72rem; letter-spacing:.55px; border-radius:26px; text-transform:uppercase }
.gallery{ display:grid; gap:1.3rem; grid-template-columns:repeat(2, minmax(0, 1fr)) }
.g-item{ aspect-ratio:16/9; background:rgba(255,255,255,0.05); border:0; border-radius:20px; overflow:hidden; cursor:pointer; padding:0; position:relative }
.g-item img{ width:100%; height:100%; object-fit:cover }
@media (max-width: 860px){
  .gallery{ grid-template-columns:1fr; gap:1rem }
}
.nav-pagination{ display:flex; justify-content:space-between; align-items:center; gap:1rem; margin-top:2.2rem }
.nav-pagination a{ display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.25rem; min-height:44px; border-radius:16px; background:rgba(255,255,255,0.07); text-decoration:none; font-size:1.05rem; letter-spacing:.25px; border:1px solid rgba(255,255,255,0.14); transition:background .25s,border-color .25s,transform .15s }
.nav-pagination a:hover{ background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.22) }
.nav-pagination a:active{ transform:translateY(1px) }
.back-link{ display:inline-flex; align-items:center; gap:.45rem; margin-top:1.6rem; font-size:.9rem; opacity:.9; text-decoration:none; background:rgba(255,255,255,0.06); padding:.6rem .9rem; border-radius:12px }
</style>
