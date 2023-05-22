<template>
    <div class="artists">
        <NuxtLink @mouseover='hov' class="artist" v-for="artist in artists" :key="artist.id" :to="'/' + artist.short">{{
            artist.name }}
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        artists: Array
    },
    mounted() {
        this.anim()
    },
    methods: {
        anim() {
            const gsap = this.$gsap;

            gsap.from(".artist", {
                delay: .4,
                rotateZ: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                rotateX: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                rotateY: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                autoAlpha: 0,
                scale: 0.7,
                filter: "blur(10px)",
                stagger: .1
            })
        },
        hov: (e) => {
            const gsap = this.$gsap;
            console.log('hover')
            gsap.to(e.target, {
                rotateZ: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                rotateX: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                rotateY: () => {
                    return "" + (Math.random() * 10 - 5) + "deg"
                },
                autoAlpha: 0.5,
                scale: 0.7,
                filter: "blur(10px)",
            })
        }
    }
}
</script>

<style>
.artists {
    width: 300px;
    margin: 0 auto;
    height: 100dvh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.artists>* {
    margin-bottom: 7px;
}

.artist {
    display: block;
    text-align: center;
}
</style>