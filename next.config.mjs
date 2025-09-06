import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  search: { 
    codeblocks: false 
  },
  // Важные опции для статического экспорта
  staticImage: true,
  flexsearch: {
    codeblocks: false
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',           // статический экспорт
  images: { 
    unoptimized: true         // обязательно для экспорта
  },
  trailingSlash: true,        // важно для GitHub Pages
  // Уберите basePath для username.github.io
  basePath: '',
  assetPrefix: '',
}

// Применяем Nextra поверх nextConfig
export default withNextra(nextConfig) 