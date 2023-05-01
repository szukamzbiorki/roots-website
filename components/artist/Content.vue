<template>
    <div class="content">
        <SanityContent :blocks="process" />
    </div>
</template>

<script>
export default {
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