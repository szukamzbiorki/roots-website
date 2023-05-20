<template>
    <div class="intro-wrapper">
        <div class="intro">
            <div class="intro-border">

            </div>
            <div class="intro-border-right">

            </div>
            <div class="card one">

                <div class="intro-text">
                    Everything that exists and grows has its <span class="sans">ROOTS</span>.
                    What does this mean to a designer or individual?
                </div>
            </div>
            <div class="card two">

                <div class="intro-text">
                    <span class="sans">ROOTS</span> are shared, yet particular and individual. Plants have roots, tribes and
                    groups have certain
                    roots. Yet, what exactly are roots? <span class="sans">ROOTS</span> as a concept is connected to many
                    different levels of (more
                    than) human activity. The social, the spiritual and the structural for instance. In our ever-changing
                    world, understanding their influence can become a catalyst for recognizing one’s own position between
                    the past, present and the futures.
                </div>
            </div>
            <div class="card three">
                <div class="intro-text">
                    <span class="sans">ROOTS</span> is a block-long project with third-year graphic design students from the
                    Royal Academy of Art, The Hague. They developed new works in various formats, with diverse narratives,
                    all
                    presented in a collective exhibition. By researching, modifying, and reflecting on their own roots, they
                    are
                    testing the capacity of the term itself and visualizing its implications on our lives.<br><br>
                    <span class="sans">ROOTS</span> is a result of Image and Philosophy classes guided by tutors <span
                        style="white-space: nowrap;">Katrin Korfmann</span> and ​​<span style="white-space: nowrap;">Maarten
                        Cornel.</span>
                    © 2022
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.cards()
    },
    methods: {
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

            // let tl = gsap.timeline({
            //     scrollTrigger: {
            //         id: 'cards',
            //         trigger: ".landing",
            //         start: "top top",
            //         pin: true,
            //         pinSpacing: true,
            //         end: "+=700",
            //         markers: true,
            //         scrub: true,
            //         defaults: { // children inherit these defaults
            //             duration: .5,
            //             ease: "power2"
            //         },
            //     }
            // });

            // tl.to(".header", {
            //     autoAlpha: 0,
            //     duration: .5
            // })
            // tl.to(".one", {
            //     xPercent: 0,
            //     autoAlpha: 1
            // })
            // tl.to(".one", {
            //     rotateZ: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateX: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateY: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     autoAlpha: 0,
            //     scale: 0.7,
            //     filter: "blur(10px)"
            // })
            // tl.from('.two', {
            //     rotateZ: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateX: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateY: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     autoAlpha: 0,
            //     scale: 1.2,
            //     filter: "blur(10px)"
            // }, "<")
            // tl.to('.two', {
            //     rotateZ: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateX: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateY: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     autoAlpha: 0,
            //     scale: 0.7,
            //     filter: "blur(10px)"
            // }, ">20%")
            // tl.from('.three', {
            //     rotateZ: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateX: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     rotateY: () => {
            //         return "" + (Math.random() * 10 - 5) + "deg"
            //     },
            //     autoAlpha: 0,
            //     scale: 1.2,
            //     filter: "blur(10px)"
            // }, "<")
            // tl.to('.intro', {
            //     autoAlpha: 0
            // })

        }
    },
    beforeDestroy() {
        // Returns the ScrollTrigger with unique Id
        // and kills it before route change
        // this.$ScrollTrigger.getById('cards').kill()
    }
}
</script>

<style>
.intro-wrapper {
    font-family: "Fell";
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.intro {}

.card:not(:last-child) {
    margin-bottom: 20px;
}

.intro-text {
    max-width: 74ch;
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
    width: 240px;
    shape-outside: polygon(0% 0%, 98.5% 0.17%, 49.00% 11.91%, 18.81% 24.99%, 11% 41.59%, 25% 65.46%, 47.77% 83.34%, 98.3% 98.84%, 0.77% 98.79%);
    -webkit-shape-outside: polygon(0% 0%, 98.5% 0.17%, 49.00% 11.91%, 18.81% 24.99%, 11% 41.59%, 25% 65.46%, 47.77% 83.34%, 98.3% 98.84%, 0.77% 98.79%);
}


.intro-border-right {
    float: right;
    height: 68vh;
    width: 300px;
    shape-outside: polygon(41.00% 79.10%, 49.5% 54.01%, 50% 33.01%, 36.48% 16.46%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 6.77% 99.22%);
    -webkit-shape-outside: polygon(41.00% 79.10%, 49.5% 54.01%, 50% 33.01%, 36.48% 16.46%, 2.44% 1.55%, 101% 0.73%, 99% 98.51%, 6.77% 99.22%);
}
</style>