<script setup lang="ts">
import { useSettingsStore } from '../store/appStore'

const settings = useSettingsStore()
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <span class="text-sm text-zinc-500 dark:text-zinc-400 text-center">Select game mode:</span>

    <div class="flex items-center gap-2">
      <button
        class="btn"
        @click="settings.gameMode = 'PvE'"
        :class="{ 'bg-violet-600 text-white': settings.gameMode === 'PvE' }"
      >
        vs CPU
      </button>
      <button
        class="btn"
        @click="settings.gameMode = 'PvP'"
        :class="{ 'bg-violet-600 text-white': settings.gameMode === 'PvP' }"
      >
        vs Player
      </button>
    </div>
  </div>
</template>
