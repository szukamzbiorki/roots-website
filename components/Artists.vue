<template>
    <div class="artists">
        <NuxtLink class="artist" v-for="artist in artists" :key="artist.id" :to="'/' + artist.short">{{ artist.name }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        artists: Array
    },
}
</script>

<style>
.artists {
    width: 300px;
    margin: 0 auto;
}

.artist {
    display: block;
    text-align: center;
}
</style>