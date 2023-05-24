<template>
    <div class="description">
        <div class="description-border" :style="{ height: `${height}px` }"></div>
        <div class="description-border-right" :style="{ height: `${height}px` }">
            <div class="keywords">
                <span class="keyword" v-for="keyword in keywords" :key="keyword.id">{{ keyword }}</span>
            </div>
            <div class="kind">{{ kind }}</div>
            <div v-if="sizes[0] != 0" class="size">
                <span class="sizepiece" v-for="size in sizes" :key="size.id">{{ size }}</span>
            </div>
            <div class="material">{{ medium }}</div>
        </div>
        <div class="desc-text">{{ description }}</div>
    </div>
</template>

<script>
export default {
    props: {
        keywords: Array,
        description: String,
        sizes: Array,
        kind: String,
        medium: String
    },
    data() {
        return {
            height: 1,
            interval: null
        };
    },
    methods: {
        changeHeight() {
            const descH = document.querySelector('.desc-text').clientHeight
            if (descH > this.height) {
                // this.height = this.height + 10;
                this.height = Math.max(this.height, descH)
                this.interval = window.requestAnimationFrame(this.changeHeight)
            } else {
                window.cancelAnimationFrame(this.interval)
            }
        }
    },
    mounted() {
        this.interval = window.requestAnimationFrame(this.changeHeight)
    },
    beforeDestroy() {
        window.cancelAnimationFrame(this.interval)
    }
}
</script>

<style>
.keywords>span {
    display: block;
    text-transform: capitalize;
}

.kind {
    align-self: flex-end;
}

.size::after {
    content: 'cm';
}

.keyword:not(:last-child)::after {
    content: ",";
}

.sizepiece:not(:last-child)::after {
    content: "×";
}

.artist-header-rest:after {
    content: '';
    display: block;
    clear: both;
}

.description {
    /* border: 1px solid black; */
    max-width: 80ch;
    overflow: auto;
    text-align: justify;
}

.description-text {
    shape-outside: ellipse(50%);
}

.description-border {
    /* border: solid red; */
    float: left;
    height: 380px;
    width: 100px;
    shape-outside: polygon(0% 0%, 98.5% 0.17%, 49.00% 11.91%, 18.81% 24.99%, 11% 41.59%, 25% 65.46%, 47.77% 83.34%, 98.3% 98.84%, 0.77% 98.79%);
    -webkit-shape-outside: polygon(0% 0%, 98.5% 0.17%, 49.00% 11.91%, 18.81% 24.99%, 11% 41.59%, 25% 65.46%, 47.77% 83.34%, 98.3% 98.84%, 0.77% 98.79%);
}

.description-border-right {
    /* border: solid green; */
    text-align: left;
    padding-top: 0em;
    float: right;
    height: 380px;
    width: 300px;
    shape-outside: polygon(45.65% 83.07%, 50.63% 66.6%, 49.49% 57.43%, 46.51% 48.95%, 42% 37.42%, 36.47% 26.71%, 23.48% 11.27%, 2.44% 1.55%, 101% 0.73%, 98.33% 97.77%, 34.43% 99%, 40.6% 94.85%);
    -webkit-shape-outside: polygon(45.65% 83.07%, 50.63% 66.6%, 49.49% 57.43%, 46.51% 48.95%, 42% 37.42%, 36.47% 26.71%, 23.48% 11.27%, 2.44% 1.55%, 101% 0.73%, 98.33% 97.77%, 34.43% 99%, 40.6% 94.85%);
}

.description-border-right>* {
    padding-bottom: 1.28em;
    font-family: 'FluxischRegular';
    font-size: .7em;
}

.description-border-right::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    float: left;
    shape-outside: polygon(51.33% 77.45%, 51.83% 63.93%, 49.06% 44.98%, 46.67% 35.49%, 28.48% 15.22%, 2.44% 1.55%, 2.67% 2.33%, 2.33% 99.67%, 28.44% 100.05%, 45.43% 93.07%);
    shape-margin: 8px;
}

@media screen and (max-width: 600px) {

    .description-border {
        height: 500px;
        width: 60px;
    }

    .description-border-right {
        height: 500px;
        width: 150px;
    }


    .description-border-right>* {
        font-size: .55em;
    }
}
</style>