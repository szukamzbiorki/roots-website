<template>
    <div class="intro-wrapper">
        <div class="intro">
            <div class="card one">
                <div class="intro-border">

                </div>
                <div class="intro-text">
                    Everything that exists and grows has its <span class="sans">ROOTS</span>.
                    What does this mean to a designer or individual?
                </div>
            </div>
            <div class="card two">
                <div class="intro-border">

                </div>
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
                <div class="intro-border">

                </div>
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
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".intro",
                    start: "center center",
                    pin: true,
                    pinSpacing: true,
                    end: "+=500",
                    markers: true,
                    scrub: true,
                    defaults: { // children inherit these defaults
                        duration: .5,
                        ease: "power2"
                    },
                }
            });

            tl.to(".header", {
                autoAlpha: 0,
                duration: .5
            })
            tl.to(".one", {
                xPercent: 0,
                autoAlpha: 1
            })
            tl.from('.two', {
                xPercent: 50,
                autoAlpha: 0
            })
            tl.from('.three', {
                xPercent: 50,
                autoAlpha: 0
            })

        }
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

.intro {
    position: relative;
    width: 400px;
    height: 400px;
}

.card {
    position: absolute;
    background-color: white;
}

.intro-text {
    max-width: 400px;
    /* -webkit-shape-outside: polygon(0% 0%,
            5% 5%,
            10% 50%,
            5% 95%,
            0% 100%); */
}

.sans {
    font-family: "Fluxisch";
}

.intro-border {
    float: left;
    height: 230px;
    width: 40px;
    shape-outside: polygon(0% 0%, 72.5% 6.25%, 90% 18%, 95.81% 27.6%, 60% 38.99%, 75.00% 70.68%, 29.77% 94.44%);
    -webkit-shape-outside: polygon(0% 0%, 72.5% 6.25%, 90% 18%, 95.81% 27.6%, 60% 38.99%, 75.00% 70.68%, 29.77% 94.44%);
}
</style>