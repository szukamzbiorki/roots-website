<template>
    <div>
        <img class="inline-img" :src="urlFor(asset._ref).width(1000).url()" />
        <p class="image-caption">{{ caption }}</p>
    </div>
</template>
  
<script>
import imageUrlBuilder from '@sanity/image-url'


export default {
    props: {
        asset: {
            type: Object,
            required: true
        },
        caption: String
    },
    methods: {
        urlFor(src) {
            const builder = imageUrlBuilder(this.$sanity.config)
            return builder.image(src)
        }
    }
}
</script>
  