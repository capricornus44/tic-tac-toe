<script setup lang="ts">
import { useSettingsStore } from '../store/appStore'

const settings = useSettingsStore()
</script>

<template>
  <!-- Only for PvE mode -->
  <div v-if="settings.gameMode === 'PvE'" class="flex flex-col gap-2 items-center">
    <span class="text-sm text-zinc-500 dark:text-zinc-400 text-center">Select your symbol:</span>

    <div class="flex items-center gap-2">
      <button
        class="btn"
        @click="settings.playerSymbol = 'X'"
        :class="{ 'bg-violet-600 text-white': settings.playerSymbol === 'X' }"
      >
        X
      </button>
      <button
        class="btn"
        @click="settings.playerSymbol = 'O'"
        :class="{ 'bg-violet-600 text-white': settings.playerSymbol === 'O' }"
      >
        O
      </button>
    </div>
  </div>
</template>
