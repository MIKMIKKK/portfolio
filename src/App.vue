
<template>
  <div id="app">
    <SiteHeader />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
#app{ min-height:100vh }
a{ color:var(--color-text) }
/* Page transitions: only animate entering, keep leaving static to avoid pre-change movement */
.page-enter-active{ transition: opacity .7s ease, transform .9s cubic-bezier(.4,.2,.1,1); }
.page-enter-from{ opacity:0; transform: translateY(20px); }
.page-leave-active{ transition: none !important; }
.page-leave-from,.page-leave-to{ opacity:1; transform:none; }
</style>
