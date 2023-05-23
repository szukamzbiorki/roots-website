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



.inline-img-container {
    max-width: 60ch;
    box-sizing: border-box;
    display: block;
}

.inline-img-container::after {}

.inline-img {
    max-width: 20vw;
}

.image-caption {
    font-family: 'Fell-Italic';
    font-size: 1rem;
    padding-left: 25px;
    margin: 0 0 1rem 0;
    max-width: 20vw;
    box-sizing: border-box;
    clear: both;
}

@media screen and (max-width: 600px) {
    .inline-img {
        max-width: 100vw;
    }

    .image-caption {
        padding-left: 25px;
        margin: 0 0 1rem 0;
        max-width: 90vw;
        box-sizing: border-box;
    }

    .content {
        max-width: 90vw;
        margin: auto;
        margin-bottom: 70px;
    }
}
</style>