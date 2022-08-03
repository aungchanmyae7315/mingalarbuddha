export default {

    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },


    // mode: 'spa',
    ssr: false,
    router: { // customize nuxt.js router (vue-router).
        middleware: 'i18n' // middleware all pages of the application
    },
    generate: {
        fallback: true,
        interval: 100
    },

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { name: 'apple-mobile-web-app-title', content: "Thai Stock 2D" },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        script: [

            { src: 'https://unpkg.com/aos@next/dist/aos.js' },
            { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
            { src: '/js/moment.min.js', defer: true },
            { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: `${dir}/favicon.ico` },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },

            { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
        ]
    },
    /*
     ** Customize the progress-bar color
     */


    /*
     ** Global CSS
     */
    css: [
        '~/assets/css/style.css',
        'element-ui/lib/theme-chalk/index.css'
    ],
    download: [
        '~/assets/download/SeinLucky.apk',

    ],
    js: [
        '~/assets/js/index.js',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    axios: {
        credentials: false,
        // baseURL: "https://build.seinchanthar.com/api/",
        baseURL: "https://backend.thaistock2d.com/api/",

        proxy: false,
        proxyHeaders: false,
        headers: {
            'Content-Type': 'application/json',
            //'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
        }
    },
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/axios',
        '@/plugins/aos',
        '@/plugins/i18n.js',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // '@nuxtjs/onesignal',

        '@nuxtjs/axios',
        // '@nuxtjs/proxy' 
    ],
    // proxy: {
    //   '/v2': {
    //     target: 'https://api.2dboss.com/api/',
    //     // pathRewrite: {
    //     //   '^/api' : '/'
    //     //   }
    //     },
    //   '/v1': {
    //     target: 'https://luke.2dboss.com/api/',
    //   },
    //   '/luke': {
    //     target: 'https://luke.2dboss.com/api/',
    //   },  
    //   '/web-app-version': {
    //     target: 'https://version.seinlucky123.com',
    //   },      
    // },

    // 
    // oneSignal: {
    //   init: {
    //     appId: '01498d20-af81-4787-a6b4-c9c1f054aeee',
    //     allowLocalhostAsSecureOrigin: true,
    //     welcomeNotification: {
    //         disable: true
    //     }
    //   }
    // },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['vue-i18n'],
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}