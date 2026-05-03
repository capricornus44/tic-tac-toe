<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Sun, Moon } from "@lucide/vue";

const isDark = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark.value);
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};
</script>

<template>
  <button
    title="Toggle theme"
    @click="toggleTheme"
    class="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-color"
  >
    <span v-if="isDark" class="w-6 h-6 text-zinc-900 dark:text-zinc-300"><Moon /></span>
    <span v-else class="w-6 h-6 text-zinc-900 dark:text-zinc-300"><Sun /></span>
  </button>
</template>
