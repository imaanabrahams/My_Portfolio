const THEME_COLOR = '#e75480'

export function useTheme() {
  const initTheme = () => {
    document.documentElement.dataset.theme = 'dark'
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR)
  }

  return { initTheme }
}
