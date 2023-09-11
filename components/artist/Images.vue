<template>
    <div class="artistImages">
        <no-ssr>
            <div class="buttons">
                <button @click="previous()">Previous</button>
                <button @click="next()">Next</button>
            </div>
            <Flickity ref="flickity" :options="flickityOptions">
                <div v-for="image in images" :key="image.id" class="carousel-cell">
                    <img :src="image.asset.url" alt="">
                </div>
            </Flickity>
        </no-ssr>
    </div>
</template>

<script>
import Flickity from '~/node_modules/vue-flickity/src/flickity';
// import Flickity from 'vue-flickity';
export default {
    components: {
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                imagesLoaded: true,
                // adaptiveHeight: true
            }
        };
    },
    props: {
        images: Array
    },
    mounted() {
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    },

}
</script>

<style scoped>
.artistImages {
    width: 100vw;
}

.flickity-slider {
    max-width: 100%;
}

.flickity-viewport {
    height: auto !important;
    transition: height 0.2s;
}

.buttons {
    display: flex;
    justify-content: space-between;
}


.buttons>button {
    background: none;
    border: 0;
    outline: 0;
    font-family: 'FluxischRegular';
    font-size: .8em;
    color: darkgrey;
}

.carousel-cell {
    height: 80vh;
}

img {
    height: 80vh;
    border-right: white 4px solid;
}

@media screen and (max-width: 600px) {

    img {
        height: auto;
        max-width: 95vw;
        border-right: white 2px solid;
    }

    .carousel-cell {
        height: auto;
    }

}
</style>