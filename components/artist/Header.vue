<template>
    <div class="artist-header">
        <NuxtLink class="back" to="/"><span class="rutz">Back to the ROOTS</span></NuxtLink>
        <div class="artist-header-top">
            <div class="name">{{ artists.name }}<a :href="'https://instagram.com/' + artists.instagram" class="insta">@{{
                artists.instagram }}</a>
            </div>
            <div class="artist-header-title">
                <div class="title">{{ artists.title }}</div>
            </div>
        </div>
        <div class="artist-header-rest">

            <ArtistDescription :keywords="artists.keywords" :kind="artists.kind" :sizes="artists.size"
                :medium="artists.medium" :description="artists.description">
            </ArtistDescription>
        </div>
        <ArtistImages :images="artists.images"></ArtistImages>
    </div>
</template>

<script>
export default {
    props: {
        artists: Object
    },
    mounted() {
        this.cards()
        // console.log(this.artists)
    },
    methods: {
        cards() {
            const gsap = this.$gsap;
            let tl = gsap.timeline({
                defaults: { // children inherit these defaults
                    duration: 0.5,
                    ease: 'power4.out'
                },
            })
            tl.from(".artist-header-top,.artist-header-title", {
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
                filter: "blur(20px)",
                // stagger: .05
            })
                .from(".description", {
                    // delay: .4,
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
                    filter: "blur(20px)",
                    // stagger: .05
                }, "-=30%")
                .from(".description-border-right > *", {
                    // delay: .4,
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
                    filter: "blur(20px)",
                    stagger: .19
                }, "-=30%")
                .from(".artistImages", {
                    yPercent: 100,
                    autoAlpha: 0
                })
        }
    }
}
</script>

<style scoped>
.back {
    position: absolute;
    top: 0;
    left: 50vw;
    transform: translateX(-50%);
}

.artist-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: url(#n1);

}

.artist-header-top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
}

.artist-header-title {
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    text-align: center;
    line-height: 5rem;
    margin-top: -20px;
    margin-bottom: 1.2rem;
    justify-content: center;
    /* justify-content: flex-start; */
}

.artist-header-rest {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6px;
}

.name,
.title {
    font-size: 80px;
}

.name {
    line-height: 88%;
    max-width: 23ch;
    text-align: center;
}

.title {
    font-family: 'Fell-Italic';
}

.insta {
    align-self: flex-end;
    padding-left: 7px;
    display: inline;
    font-size: 15px;
}

.rutz {
    font-family: 'FluxischRegular';
}

@media screen and (max-width: 600px) {

    .artist-header-title {
        margin-bottom: .4rem;
        max-width: 92vw;
    }

    .name,
    .title {
        /* display: inline-block; */

        font-size: 35px;
        line-height: 99%;
    }

    .insta {
        font-size: 12px;
    }
}
</style>