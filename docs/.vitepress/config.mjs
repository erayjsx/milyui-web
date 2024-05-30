import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "milyui",
  description: "The best way to create modern and fast pages.",
  head: [
    [
      "link",
      {
        href: "https://fonts.cdnfonts.com/css/br-omny",
        rel: "stylesheet",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/gh/erayjsx/milyui@0.0.8/dist/bundle.js",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Components",
        link: "/components/accordion",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Installation", link: "/installation" },
          { text: "Customization", link: "/customization" },
          { text: "Colors", link: "/colors" },
          { text: "Examples", link: "/examples" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Accordion", link: "/components/accordion" },
          { text: "Drawer", link: "/components/drawer" },
          { text: "Modal", link: "/components/modal" },
          { text: "Alerts (Soon)" },
          { text: "Button (Soon)" },
          { text: "Breadcrumb (Soon)" },
          { text: "Badges (Soon)" },
          { text: "Collapse (Soon)" },
          { text: "Dropdown (Soon)" },
          { text: "Menu (Soon)" },
          { text: "Popovers (Soon)" },
          { text: "Toast (Soon)" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/erayjsx/milyui" },
      { icon: "npm", link: "https://www.npmjs.com/package/@erayjs/milyui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2024 - <a target='_blank' href='https://github.com/erayjsx'><b>@erayjsx</b></a>",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    tr: {
      label: "Türkçe",
      lang: "tr",
    },
    es: {
      label: "Spanish",
      lang: "es",
    },
    fr: {
      label: "French",
      lang: "fr",
    },
  },
});
