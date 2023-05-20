<template>
    <div class="artistImages">
        <no-ssr>
            <div class="buttons">
                <button @click="previous()">Previous</button>
                <button @click="next()">Next</button>
            </div>
            <flickity ref="flickity" :options="flickityOptions">
                <img v-for="image in images" :key="image.id" :src="image.asset.url" alt="">
            </flickity>

        </no-ssr>
    </div>
</template>

<script>

export default {
    data() {
        return {
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                imagesLoaded: true,
                adaptiveHeight: true,
                freeScroll: true,
                wrapAround: true
                // on: {
                //     ready: () => { imagesLoaded(this.$refs.flickity, this.loadComplete) }
                // }
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
    }
}
</script>

<style scoped>
.artistImages {
    width: 70vw;
}

.artistImages>img {
    max-width: 100%;
}

.artistImages>img:not(:last-child) {
    padding-bottom: 5px;
}

.flickity-slider {
    max-width: 100%;
}

.slick-slider {
    display: flex;
    background-color: white;
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
}

img {
    max-width: 70vw;
}
</style>