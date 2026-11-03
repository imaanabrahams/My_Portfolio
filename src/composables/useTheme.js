import { ref } from 'vue'

const theme = ref('light')
const STORAGE_KEY = 'ia-theme-v2'

const THEME_COLORS = { light: '#fffdfd', dark: '#e75480' }

function apply(value) {
  document.documentElement.dataset.theme = value
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[value] ?? THEME_COLORS.light)
}

export function useTheme() {
  const initTheme = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      theme.value = saved || 'light'
    } catch {
      theme.value = 'light'
    }
    apply(theme.value)
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch {
      /* ignore storage errors */
    }
    apply(theme.value)
  }

  return { theme, initTheme, toggleTheme }
}
