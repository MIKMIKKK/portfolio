<template>
  <div class="lightbox" @keydown.esc.prevent="close" tabindex="0" ref="root">
    <div class="overlay" @click="close" />
    <div class="dialog" ref="dialog">
      <button class="close" @click="close" aria-label="Fermer">×</button>
      <div class="image-wrapper">
        <img :src="images[index]" :alt="'Image ' + (index+1)" />
      </div>
      <div class="controls">
        <button @click="prev" :disabled="index===0">Précédent</button>
        <span>{{ index+1 }} / {{ images.length }}</span>
        <button @click="next" :disabled="index===images.length-1">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
const props = defineProps({ images: Array, index: Number })
const emits = defineEmits(['close'])
const root = ref(null)
const dialog = ref(null)
const index = ref(props.index || 0)
watch(()=>props.index, v=> index.value = v)
function close(){ emits('close') }
function prev(){ if(index.value>0) index.value-- }
function next(){ if(index.value < props.images.length-1) index.value++ }
onMounted(()=>{ root.value.focus() })
</script>

<style scoped>
.lightbox{ position:fixed; inset:0; z-index:200; display:flex; align-items:center; justify-content:center; }
.overlay{ position:absolute; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(6px); }
.dialog{ position:relative; max-width:1000px; width:90%; background:#0b1621; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
.image-wrapper{ max-height:70vh; overflow:hidden; border-radius:8px; }
.image-wrapper img{ width:100%; height:100%; object-fit:contain; }
.close{ position:absolute; top:8px; right:12px; background:none; color:#fff; font-size:1.6rem; border:0; cursor:pointer; }
.controls{ display:flex; align-items:center; justify-content:space-between; font-size:.75rem }
.controls button{ background:rgba(255,255,255,0.08); color:#fff; border:0; padding:.5rem .9rem; border-radius:6px; cursor:pointer }
.controls button:disabled{ opacity:.3; cursor:not-allowed }
</style>
