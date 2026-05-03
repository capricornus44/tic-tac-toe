import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    appTheme: localStorage.getItem('theme') || 'light',
    gameMode: 'PvE',
    playerSymbol: 'X',
    scores: { x: 0, o: 0, draw: 0 },
  }),
})
