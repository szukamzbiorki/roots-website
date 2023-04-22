<template>
  <div class="wrapper">
    <div class="landing">
      <Header></Header>
      <Intro></Intro>
    </div>
    <Potatos></Potatos>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  /* Firefox */
}</style>