export default {
  target: "static",
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    "nuxt-webfontloader",
    // Auto-detect light or dark mode
    "@nuxtjs/color-mode"
  ],
  webfontloader: {
    google: {
      families: ["Inter"]
    }
  },
  purgeCSS: {
    whitelistPatterns: [/[\w-/.:]+(?<!:)/g]
  },
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      }
    }
  }
}