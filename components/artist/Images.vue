<template>
    <div class="artistImages">
        <slick ref="slick" :options="slickOptions">
            <img v-for="image in images" :key="image.id" :src="image.asset.url" alt="">
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
    components: { Slick },
    data() {
        return {
            slickOptions: {
                // arrows: true
                // Any other options that can be got from plugin documentation
            },
        };
    },
    props: {
        images: Array
    },
    mounted() {

    }
}
</script>

<style>
.artistImages {
    max-width: 70vw;
}

.artistImages>img {
    max-width: 100%;
}

.artistImages>img:not(:last-child) {
    padding-bottom: 5px;
}

.slick-slider {
    display: flex;

}

.slick-slider>button {
    background: none;
    border: 0;
    outline: 0;
    font-family: 'FluxischRegular';
    font-size: .8em;
}
</style>