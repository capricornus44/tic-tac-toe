<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
import GameTitle from './components/GameTitle.vue'
import GameOptions from './components/GameOptions.vue'
</script>

<template>
  <header class="header"><ThemeToggle /></header>
  <main class="flex flex-col items-center">
    <GameTitle />
    <GameOptions />
  </main>
</template>
