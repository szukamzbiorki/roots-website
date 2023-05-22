<template>
    <div class="header">
        <NuxtLink to="/about">About</NuxtLink>
        <span class="title">
            ROOTS
        </span>
        <NuxtLink to="/colophon">Colophon</NuxtLink>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.title {
    font-family: 'Fluxisch';
}
</style>