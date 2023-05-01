<template>
    <div class="artistImages">
        <img v-for="image in images" :key="image.id" :src="image.asset.url" alt="">
    </div>
</template>

<script>

export default {
    props: {
        images: Array
    },
    mounted() {

    }
}
</script>

<style>
.artistImages {
    max-width: 80ch;
}

.artistImages>img {
    max-width: 100%;
}

.artistImages>img:not(:last-child) {
    padding-bottom: 5px;
}
</style>