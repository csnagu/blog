import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.baseFontSize = "15px"
githubTheme.headerFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Hiragino Sans",
  "Noto Sans CJK JP",
  "Original Yu Gothic",
  "Yu Gothic",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Sans Emoji"
]
githubTheme.bodyFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Hiragino Sans",
  "Noto Sans CJK JP",
  "Original Yu Gothic",
  "Yu Gothic",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Sans Emoji"
]
githubTheme.overrideStyles = ({ rhythm }) => ({
  'a': {
    color: "#39AB8D",
  },
  'td,th': {
    textAlign: null,
  },
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
