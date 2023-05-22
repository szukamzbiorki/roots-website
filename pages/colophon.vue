<template>
    <div class="wrapper">
        <NuxtLink class="back" to="/"><span class="rutz">Back to the ROOTS</span></NuxtLink>
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
                    Curation
                </div>
                <div class="person">
                    Lucy Gengler
                </div>
            </section>
            <section>
                <div class="role">
                    Design
                </div>
                <div class="person">
                    Stefaniia Bodnia & Aliona Ciobanu
                </div>
            </section>
            <section>
                <div class="role">
                    Photography
                </div>
                <div class="person">
                    Roel Backaert
                </div>
            </section>
            <section>
                <div class="role">
                    Proofreading
                </div>
                <div class="person">
                    Lauren Alexander
                </div>
            </section>
            <section>
                <div class="role">
                    Supervision
                </div>
                <div class="person">
                    Katrin Korfmann & Maarten Cornel
                </div>
            </section>
            <section>
                <div class="role">
                    Website design & development
                </div>
                <div class="person">
                    <a target=”_blank” href="https://bartekp.nl">
                        Bartek Pierściński
                    </a>
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
                stagger: .13
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

a,
.back {
    color: white;
}

.back {
    position: absolute;
    top: 0;
    left: 50vw;
    transform: translateX(-50%);
}

.colophon>section:not(:last-child) {
    margin-bottom: 20px;
}

.rutz {
    font-family: 'FluxischRegular';
}
</style>