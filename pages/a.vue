<template>
  <div class="wrapper">
    <NuxtLink to="/" class="title">
      ROOTS
    </NuxtLink>
    <div class="landing">
      <Header></Header>
    </div>
    <!-- <Artists :artists="artistlist"></Artists> -->
    <div class="potatos">
      <Mobile v-if="isMobile"></Mobile>
      <Desktop v-else="isMobile"></Desktop>
      <!-- <Desktop></Desktop> -->
    </div>

    <!-- <Potatos></Potatos> -->
  </div>
</template>

<script setup>
import useScreenType from "../utils/useScreenType";

const { isMobile } = useScreenType();
</script>

<script>
import { groq } from '@nuxtjs/sanity'
// import useScreenType from "../utils/useScreenType.js";

export default {
  setup() {
    // const { isDesktop } = useScreenType();
    // return isDesktop
  },
  created() {
    // let isit = this.isDesktop
  },
  name: "Landing",
  asyncData({ params, $sanity }) {
    const query = groq`{ "artistlist": *[_type == "artist"] | order(name asc){name, short} }`
    return $sanity.fetch(query)
  },
}
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  scrollbar-width: none;
  /* overflow: hidden; */
}

.landing {
  width: 100vw;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
}
</style>

<style scoped>
.wrapper {
  overflow: hidden;
}

.potatos {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .wrapper {
    overflow: scroll;
  }
}

.title {
  font-family: 'Fluxisch';
  position: absolute;
  left: 50vw;
  top: 0;
  transform: translateX(-50%);
}
</style>