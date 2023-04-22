<template>
    <div class="artist-header">
        <NuxtLink class="back" to="/">Back to main page</NuxtLink>
        <div class="artist-header-top">
            <div class="name">Bartek Pierściński</div>
            <a href="https://instagram.com/bartekpierscinski" class="insta">@bartekpierscinski</a>
        </div>
        <div class="artist-header-rest">
            <div class="title">Provoking Hefajstos</div>
            <div class="material">Iron and Acrylic paint</div>
            <div class="keywords">
                <span class="keyword">Metalworking</span>
                <span class="keyword">Rural Creativity</span>
                <span class="keyword">Visual Language</span>
                <span class="keyword">DIY</span>
                <span class="keyword">Vernacular</span>
            </div>
            <div class="kind">Instalation</div>
            <div class="description">
                <div class="description-border"></div>
                <div class="description-text">
                    Pierściński's inspiration comes from Olga Drenda’s book “Wyroby”, circling around the topic of
                    vernacular
                    culture expressed in everyday goods. The book takes on the subject of metal fences, gates, and window
                    shields—which in the second half of the XX century in Poland were a prominent outlet of rural
                    creativity—and
                    places them in a context of struggle and subversiveness against the reign of the communist regime.
                    The artist appropriates this metalworking method, while also applying the discrepancy between its
                    heritage
                    and the form of the illustration to the work. He utilizes visual language sampled from the visuality
                    surrounding him in the context of being a graphic design student in the Netherlands.
                    The title of the work refers to the pseudonym of a legendary polish metalworker. “Hefajstos” is the
                    polish
                    name for the greek god of the blacksmithing craft.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
}

.artist-header-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.name,
.title {
    /* display: inline-block; */
    font-size: 80px;
}

.insta {
    align-self: flex-end;
}

.keyword:not(:last-child)::after {
    content: ",";
}

.description {
    max-width: 37vw;
}

.description-border {
    float: left;
    height: 230px;
    width: 40px;
    shape-outside: polygon(0% 0%, 72.5% 6.25%, 90% 18%, 95.81% 27.6%, 60% 38.99%, 75.00% 70.68%, 29.77% 94.44%);
    -webkit-shape-outside: polygon(0% 0%, 72.5% 6.25%, 90% 18%, 95.81% 27.6%, 60% 38.99%, 75.00% 70.68%, 29.77% 94.44%);
}
</style>