<template>
    <div class="description">
        <div class="description-border"></div>
        <div class="description-border-right">
            <div class="keywords">
                <span class="keyword" v-for="keyword in keywords" :key="keyword.id">{{ keyword }}</span>
            </div>
            <div class="kind">{{ kind }}</div>
            <div v-if="sizes[0] != 0" class="size">
                <span class="sizepiece" v-for="size in sizes" :key="size.id">{{ size }}</span>
            </div>
            <div class="material">{{ medium }}</div>
        </div>
        {{ description }}
        <div style="clear: both; content: ''; display: block;">&nbsp;</div>
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
    padding-top: .3em;
    float: right;
    height: 380px;
    width: 300px;
    shape-outside: polygon(82.66% 84.56%, 92.3% 66.23%, 64.49% 52.97%, 46.51% 48.95%, 42% 37.42%, 36.47% 26.71%, 23.48% 11.27%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 31.1% 99.74%, 55.26% 95.59%);
    -webkit-shape-outside: polygon(82.66% 84.56%, 92.3% 66.23%, 64.49% 52.97%, 46.51% 48.95%, 42% 37.42%, 36.47% 26.71%, 23.48% 11.27%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 31.1% 99.74%, 55.26% 95.59%);
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
    shape-outside: polygon(41% 79.1%, 49.5% 54.01%, 50% 33.01%, 36.48% 16.46%, 2.44% 1.55%, 2.67% 2.33%, 5.00% 100.91%, 6.77% 99.22%);
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