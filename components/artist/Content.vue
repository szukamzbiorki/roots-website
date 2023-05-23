<template>
    <div class="content">
        <SanityContent :blocks="process" :serializers="serializers" />
    </div>
</template>

<script>
import InlineImage from '~/components/InlineImage.vue'

export default {
    data() {
        return {
            serializers: {
                types: {
                    image: InlineImage
                }
            }
        }
    },
    props: {
        process: Array
    },
    mounted() {
        console.log(this.process)
    },
}
</script>

<style>
.content {
    max-width: 80ch;
    margin: auto;
}

.inline-img {
    float: left;
    max-width: 80ch;
}

.image-caption {
    font-family: 'Fell-Italic';
    font-size: 1rem;
}
</style>