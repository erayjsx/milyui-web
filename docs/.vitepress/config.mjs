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
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Components",
        link: "/components",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Installation", link: "/getting-started" },
          { text: "Examples", link: "/examples" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Drawer", link: "/components/drawer" },
          { text: "Modal", link: "/components/modal" },
          { text: "Accordion (Soon)" },
          { text: "Alert (Soon)" },
          { text: "Dropdown (Soon)" },
          { text: "Menu (Soon)" },
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
    en: {
      label: "Türkçe",
      lang: "tr",
      link: "/tr/",
    },
  },
});
