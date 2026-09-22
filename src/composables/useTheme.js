import { ref } from 'vue'

const theme = ref('light')
const STORAGE_KEY = 'ia-theme'

function apply(value) {
  document.documentElement.dataset.theme = value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#90ee90' : '#ff8fab')
}

export function useTheme() {
  const initTheme = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      theme.value = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
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