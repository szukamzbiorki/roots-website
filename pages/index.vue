<template>
  <div class="wrapper">
    <span class="title">
      ROOTS
    </span>
    <div class="landing">
      <Header></Header>
    </div>
    <Artists :artists="artistlist"></Artists>
    <!-- <Potatos></Potatos> -->
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  name: "IndexPage",
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

.title {
  font-family: 'Fluxisch';
  position: absolute;
  left: 50vw;
  top: 0;
  transform: translateX(-50%);
}
</style>