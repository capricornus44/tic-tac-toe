<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
import { onMounted } from 'vue'
import { useSettingsStore } from '../store/appStore'

const settings = useSettingsStore()

onMounted(() => {
  const savedTheme = settings.appTheme
  if (savedTheme) {
    settings.appTheme = savedTheme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }
})

const toggleTheme = () => {
  settings.appTheme = settings.appTheme === 'light' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', settings.appTheme === 'dark')
  localStorage.setItem('theme', settings.appTheme)
}
</script>

<template>
  <button
    title="Toggle theme"
    @click="toggleTheme"
    class="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-color"
  >
    <span v-if="settings.appTheme === 'dark'" class="w-6 h-6 text-zinc-900 dark:text-zinc-300"
      ><Moon
    /></span>
    <span v-else class="w-6 h-6 text-zinc-900 dark:text-zinc-300"><Sun /></span>
  </button>
</template>
