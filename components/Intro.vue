<template>
    <div class="intro-wrapper">
        <div class="intro">
            <div class="intro-border" :style="{ height: `${height}px` }">

            </div>
            <div class="intro-border-right" :style="{ height: `${height}px` }">

            </div>
            <div class="cards">
                <div class="card one">

                    <div class="intro-text">
                        Everything that exists and grows has its <span class="sans">ROOTS</span>.
                        What does this mean to a designer or individual?
                    </div>
                </div>
                <div class="card two">

                    <div class="intro-text">
                        <span class="sans">ROOTS</span> are shared, yet particular and individual. Plants have roots, tribes
                        and
                        groups have certain
                        roots. Yet, what exactly are roots? <span class="sans">ROOTS</span> as a concept is connected to
                        many
                        different levels of (more
                        than) human activity. The social, the spiritual and the structural for instance. In our
                        ever-changing
                        world, understanding their influence can become a catalyst for recognizing one’s own position
                        between
                        the past, present and the futures.
                    </div>
                </div>
                <div class="card three">
                    <div class="intro-text">
                        <span class="sans">ROOTS</span> is a block-long project with third-year graphic design students from
                        the
                        Royal Academy of Art, The Hague. They developed new works in various formats, with diverse
                        narratives,
                        all
                        presented in a collective exhibition. By researching, modifying, and reflecting on their own roots,
                        they
                        are
                        testing the capacity of the term itself and visualizing its implications on our lives.<br><br>
                        <span class="sans">ROOTS</span> is a result of Image and Philosophy classes guided by tutors <span
                            style="white-space: nowrap;">Katrin Korfmann</span> and ​​<span
                            style="white-space: nowrap;">Maarten
                            Cornel.</span>
                        © 2022
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: 1,
            interval: null
        };
    },
    mounted() {
        this.cards()
        this.interval = window.requestAnimationFrame(this.changeHeight)
    },
    beforeDestroy() {
        window.cancelAnimationFrame(this.interval)
    },
    methods: {
        changeHeight() {
            const descH = document.querySelector('.cards').clientHeight
            if (descH > this.height) {
                // this.height = this.height + 10;
                this.height = Math.max(this.height, descH)
                this.interval = window.requestAnimationFrame(this.changeHeight)
            } else {
                window.cancelAnimationFrame(this.interval)
            }
        },
        cards() {
            const gsap = this.$gsap;

            gsap.from(".card", {
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

<style>
.intro-wrapper {
    font-family: "Fell";
    max-width: 70ch;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin: 0 auto;
}

.intro {}

.card:not(:last-child) {
    margin-bottom: 20px;
}

.intro-text {
    text-align: justify;
}

.pin-spacer {
    flex-basis: auto;
}

.sans {
    font-family: "Fluxisch";
}

.intro-border {
    float: left;
    height: 68vh;
    width: 200px;
    shape-outside: polygon(0% 0%, 99% -0.25%, 60% 11.91%, 28.31% 29.45%, 15.5% 56.88%, 23.5% 78.41%, 46.27% 85.68%, 67.73% 93.6%, 99.80% 98.84%, 0.77% 98.79%);
    -webkit-shape-outside: polygon(0% 0%, 99% -0.25%, 60% 11.91%, 28.31% 29.45%, 15.5% 56.88%, 23.5% 78.41%, 46.27% 85.68%, 67.73% 93.6%, 99.80% 98.84%, 0.77% 98.79%);
}


.intro-border-right {
    float: right;
    height: 68vh;
    width: 200px;
    shape-outside: polygon(42.5% 90.14%, 51.76% 79.55%, 58.8% 69.22%, 58.50% 52.10%, 53% 36.41%, 42.48% 19.22%, 20.78% 6.42%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 0.77% 99.22%);
    -webkit-shape-outside: polygon(42.5% 90.14%, 51.76% 79.55%, 58.8% 69.22%, 58.50% 52.10%, 53% 36.41%, 42.48% 19.22%, 20.78% 6.42%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 0.77% 99.22%);
}

@media screen and (max-width: 600px) {
    .intro-wrapper {
        width: 90vw;
        margin: 0 auto;
        align-items: flex-start;
        margin-top: 4.2rem;
    }

    .intro-border {
        width: 40px;
        height: 90vh;
        shape-margin: 10px;
    }

    .intro-border-right {
        width: 60px;
        height: 90vh;
    }

}
</style>