// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-aos",
    "nuxt-nodemailer",
    "@prisma/nuxt"
  ],

  css: ["@fortawesome/fontawesome-free/css/all.css", "~/assets/css/style.css"],

  runtimeConfig: {
    admin: {
      email: "ebubeireneaus@gmail.com",
      password: "@20131486Ha",
    },
    public: {
      tinymaceEditorApiKey: process.env.TINYMACE_EDITOR_API_Key,
    },
  },

  aos: {
    once: true,
  },

  nodemailer: {
    from: '"Ireneaus" <alfredebube7@gmail.com>',
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '7d8d53001@smtp-brevo.com',
      pass: '',
    },
  },

  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },

});
