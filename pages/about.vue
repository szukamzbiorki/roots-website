<template>
    <div class="wrapper">
        <NuxtLink class="back" to="/"><span class="rutz">Back to the ROOTS</span></NuxtLink>
        <Intro></Intro>
    </div>
</template>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.back {
    position: absolute;
    top: 0;
    left: 50vw;
    transform: translateX(-50%);
}


.rutz {
    font-family: 'FluxischRegular';
}
</style>

<script></script>