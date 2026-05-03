<script setup lang="ts">
import GameMode from './GameMode.vue'
import PlayerSymbol from './PlayerSymbol.vue'
import ScoreDisplay from './ScoreDisplay.vue'
</script>

<template>
  <div class="flex items-center gap-6">
    <GameMode />
    <PlayerSymbol />
    <ScoreDisplay />
  </div>
</template>
