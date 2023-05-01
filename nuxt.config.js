export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ROOTS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/svg'
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
    extraEases: {
    }
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sanity/module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
        // fix to work with swiperjs 8 - need to run with standalone:true. That can make some troubles.
        // standalone: true,
        // extend(config, ctx) {
        //   // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
        //   config.externals = [
        //     {
        //       encoding: 'encoding',
        //     },
        //   ]
        // },
  },
  
  pageTransition: {
    name: 'page',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        yPercent: 50,
        rotateZ: (index, target) => {
          return "" + (Math.random() * 40 - 20) + "deg"
      },
      rotateX: () => {
          return "" + (Math.random() * 40 - 20) + "deg"
      },
      rotateY: () => {
          return "" + (Math.random() * 40 - 20) + "deg"
      },
      filter: "blur(30px)"
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: done,
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px)"
    })
      },

    leave(el, done) {
      this.$gsap.to(el, {
        scale: 0.8,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: done,
        rotateZ: (index, target) => {
          return "" + (Math.random() * 40 - 20) + "deg"
      },
      rotateX: () => {
          return "" + (Math.random() * 40 - 20) + "deg"
      },
      rotateY: () => {
          return "" + (Math.random() * 100 - 50) + "deg"
      }
      })
    }
  }
}
