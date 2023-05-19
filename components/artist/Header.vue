<template>
    <div class="artist-header">
        <NuxtLink class="back" to="/">Back to main page</NuxtLink>
        <div class="artist-header-top">
            <div class="name">{{ artists.name }}</div>
            <a :href="'https://instagram.com/' + artists.instagram" class="insta">@{{ artists.instagram }}</a>
        </div>
        <div class="artist-header-rest">
            <div class="artist-header-title">
                <div class="title">{{ artists.title }}</div>
            </div>
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
        console.log(this.artists)
    },
    methods: {
        cards() {
            const gsap = this.$gsap;

            gsap.from(".artist-header>div", {
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
.back {
    position: absolute;
    top: 0;
    left: 0;
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
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 30px;
}

.artist-header-title {
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    text-align: center;
    line-height: 5rem;
    margin-bottom: 1rem;
    /* justify-content: flex-start; */
}

.artist-header-rest {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.name,
.title {
    /* display: inline-block; */

    font-size: 80px;
}

.name {
    line-height: .75em;
}

.title {
    font-family: 'Fell-Italic';
}

.insta {
    align-self: flex-end;
}

@media screen and (max-width: 600px) {

    .name,
    .title {
        /* display: inline-block; */

        font-size: 30px;
        line-height: 99%;
    }
}
</style>