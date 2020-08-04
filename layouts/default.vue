<template>
  <nuxt />
</template>

<script>
export default {
  head: {
    title: "Leaply",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  }
};
</script>