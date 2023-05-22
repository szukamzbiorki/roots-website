<template>
    <div class="header">
        <NuxtLink class="about" to="/about">About</NuxtLink>

        <NuxtLink class="colophon" to="/colophon">Colophon</NuxtLink>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
}



.about {
    justify-self: flex-start;
}

.colophon {
    justify-self: flex-end;
}
</style>