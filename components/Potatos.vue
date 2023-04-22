<template>
    <div class="potatos">
        <img class="potatoimg" src="assets/potatos.svg" alt="" srcset="">
    </div>

    <!-- <component v-bind:is="potat"></component> -->
</template>

<script>
// export default {
//     data: () => ({
//         name: "potatos"
//     }),
//     computed: {
//         potat() {
//             return require(`assets/icons/potatos.svg?raw`).default
//         }
//     }
// }
</script>

<style>
.potatos {
    width: 100vw;

}

.potatoimg {
    width: 100%;
    height: auto;
}
</style>