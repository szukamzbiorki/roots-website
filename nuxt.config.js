export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ROOTS EXHIBITION',
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
    { src: '~/plugins/VueFlickity.js', ssr: false }
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
  loading: false,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sanity/module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'vue-loader',
          'vue-svg-loader'
        ],
      },
    ],
  },
  
  pageTransition: {
    name: 'page',
    css: false,
    mode: 'out-in',

    beforeEnter(el) {
      this.$gsap.set(el, {
        yPercent: 100
      })
      // this.$gsap.set(el, {
      //   yPercent: 50,
      //   rotateZ: (index, target) => {
      //     return "" + (Math.random() * 40 - 20) + "deg"
      // },
      // rotateX: () => {
      //     return "" + (Math.random() * 40 - 20) + "deg"
      // },
      // rotateY: () => {
      //     return "" + (Math.random() * 40 - 20) + "deg"
      // },
      // filter: "blur(30px)"
      // })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        yPercent: 0,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done
    })
    //   this.$gsap.to(el, {
    //     yPercent: 0,
    //     opacity: 1,
    //     duration: 0.3,
    //     ease: 'power2.inOut',
    //     onComplete: done,
    //     rotateZ: 0,
    //     rotateX: 0,
    //     rotateY: 0,
    //     filter: "blur(0px)"
    // })
      },

    leave(el, done) {
      this.$gsap.to(el, {
        scale: 0.8,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.25,
        ease: 'power4.out',
        onComplete: done,
        // yPercent: -70
      })
      // this.$gsap.to(el, {
      //   scale: 0.8,
      //   filter: "blur(30px)",
      //   opacity: 0,
      //   duration: 0.4,
      //   ease: 'power2.inOut',
      //   onComplete: done,
      //   rotateZ: (index, target) => {
      //     return "" + (Math.random() * 40 - 20) + "deg"
      // },
      // rotateX: () => {
      //     return "" + (Math.random() * 40 - 20) + "deg"
      // },
      // rotateY: () => {
      //     return "" + (Math.random() * 100 - 50) + "deg"
      // }
      // })
    }
  }
}
