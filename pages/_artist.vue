<template>
    <div class="wrapper">
        <ArtistHeader :artists="artists[0]"></ArtistHeader>
        <ArtistContent :process="artists[0].process"></ArtistContent>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
    asyncData({ params, $sanity }) {
        const query = groq`{ "artists": *[_type == "artist" && short == "${params.artist}"]{name, instagram, title, medium, keywords, size, kind, description, images[]{asset->{url}}, process} }`
        return $sanity.fetch(query)
    },
}
</script>

<style scoped>
.wrapper {
    font-size: 17px;
}

@media screen and (max-width: 600px) {
    .wrapper {
        font-size: 15px;
    }
}
</style>