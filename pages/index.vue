<template>
  <div class="wrapper">
    <div class="landing">
      <Header></Header>
      <!-- <Intro></Intro> -->
    </div>
    <Artists :artists="artistlist"></Artists>
    <Potatos></Potatos>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  name: "IndexPage",
  asyncData({ params, $sanity }) {
    const query = groq`{ "artistlist": *[_type == "artist"]{name, short} }`
    return $sanity.fetch(query)
  },
}
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  scrollbar-width: none;
  /* Firefox */
}

.landing {
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  /* Firefox */
}
</style>