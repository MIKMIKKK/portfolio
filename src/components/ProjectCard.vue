<template>
  <article class="project-card" ref="card">
    <div class="project-media">
      <!-- placeholder image -->
      <img :src="image" alt="project image" style="width:100%; height:100%; object-fit:cover" />
    </div>
    <h3 class="gradient-title">{{ title }}</h3>
    <p class="muted">{{ short }}</p>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ title: String, short: String, image: { type: String, default: '/placeholder.png' } })
const card = ref(null)
onMounted(()=>{
})
</script>

<style scoped>
.project-card{ display:flex; flex-direction:column; gap:0.65rem }
.project-card h3{ font-size:1.05rem }
.project-card p{ margin-top:auto }
</style>
