module.exports = {
  presets: ["next/babel"],
  plugins: ["import-glob-array", ["styled-components", { ssr: true }]]
}
