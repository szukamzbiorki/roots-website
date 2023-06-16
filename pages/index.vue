<template>
  <div class="wrapper">
    <div class="redirects">
      <NuxtLink class="linkacz" to="/a"><A></A></NuxtLink>
      <NuxtLink class="linkacz" to="/b/"><B></B></NuxtLink>
    </div>
  </div>
</template>

<script>
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

.link {
  height: 80vh;
  width: 40vw;
}
</style>

<style scoped>
.wrapper {
  overflow: hidden;
}

.redirects {
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}



@media screen and (max-width: 600px) {
  .wrapper {
    overflow: scroll;
  }

  .redirects {
    width: 90vw;
    height: 90vh;
    flex-direction: column;
    align-items: center;
  }

  .link {
    width: 90vw;
    height: 40vh;
  }

  .linkacz {
    width: 90vw;
  }
}
</style>