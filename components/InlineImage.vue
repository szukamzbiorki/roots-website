<template>
    <img class="inline-img" :src="urlFor(asset._ref).width(1000).url()" />
</template>
  
<script>
import imageUrlBuilder from '@sanity/image-url'


export default {
    props: {
        asset: {
            type: Object,
            required: true
        }
    },
    methods: {
        urlFor(src) {
            const builder = imageUrlBuilder(this.$sanity.config)
            return builder.image(src)
        }
    }
}
</script>
  