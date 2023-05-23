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
    margin-bottom: 70px;
}

.inline-img {
    max-width: 80ch;
}

.image-caption {
    font-family: 'Fell-Italic';
    font-size: 1rem;
    margin-left: 25px;
    box-sizing: border-box;
}

@media screen and (max-width: 600px) {
    .inline-img {
        max-width: 100vw;
    }

    .image-caption {
        padding-left: 25px;
        max-width: 100vw;
    }
}
</style>