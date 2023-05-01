<template>
    <div class="wrapper">
        <NuxtLink to="/">Back to Roots</NuxtLink>
        <div class="colophon">
            <section>
                <div class="role">
                    Production
                </div>
                <div class="person">
                    Lucy Gengler
                </div>
            </section>
            <section>
                <div class="role">
                    Production
                </div>
                <div class="person">
                    Lucy Gengler
                </div>
            </section>
            <section>
                <div class="role">
                    Production
                </div>
                <div class="person">
                    Lucy Gengler
                </div>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.anim()
    },
    methods: {
        anim() {
            const gsap = this.$gsap;

            gsap.from(".colophon>section", {
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
                stagger: .4
            })
        }
    }
}
</script>

<style scoped>
body {
    background-color: black;
    color: white;
}

p {
    background-color: black;
    color: white;
}

.wrapper {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
}

.colophon>section:not(:last-child) {
    margin-bottom: 20px;

}
</style>