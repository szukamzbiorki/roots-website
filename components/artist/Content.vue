<template>
    <div class="content">
        <SanityContent :blocks="process" />
    </div>
</template>

<script>
import { h } from "vue";
export default {
    setup() {
        // const serializers = {
        //     types: {
        //         image: (data) => {
        //             return h("img", { src: this.imageUrlFor(data).width(400).url() });
        //         },
        //     },
        // };
        // return { serializers };
    },
    props: {
        process: Array
    },
    mounted() {
        console.log(this.process)
    }
}
</script>

<style>
.content {
    max-width: 80ch;
    margin: auto;
}
</style>