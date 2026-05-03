<script setup lang="ts">
import { useSettingsStore } from '../store/appStore'

const settings = useSettingsStore()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <span class="text-sm text-zinc-500 dark:text-zinc-400 text-center">Scores:</span>

    <div class="flex items-center gap-2">
      <p class="btn">
        X:
        <span>{{ settings.scores.x }}</span>
      </p>
      <p class="btn">
        0:
        <span>{{ settings.scores.o }}</span>
      </p>
      <p class="btn">
        Draw:
        <span>{{ settings.scores.draw }}</span>
      </p>
    </div>
  </div>
</template>
