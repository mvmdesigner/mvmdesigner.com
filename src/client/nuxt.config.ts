// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            meta: [
                { name: 'keywords', content: 'Education, Trail, Grade Manager, College, Grade Analytics' },
                { name: 'author', content: 'ntohq developers @ntohqdev <github@ntohq.dev>' }
            ]
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {

                }
            }

        }
    },
    css: [
        '@/assets/styles/core.scss',
        '@mdi/font/scss/materialdesignicons.scss'
    ],
})
