<script>


export default {
    name: "EventCard",
    data() {
        return {
            events: [
                {
                    title: "Coding Challenge",
                    image: "codingchallenge.png",
                    description: "Questo è stato il mio primo progetto, grazie a questo sono riuscito ad entrare in Boolean. Non è nulla di complesso, ho utilizzato solo HTML e CSS. Ho deciso di mettere questo progetto perchè stato il primo di una lunga serie e forse anche quello a cui sono più affezionato."
                },
                {
                    title: "Spotify",
                    image: "spotify.jpg",
                    description: "In questo progetto viene rappresentata la pagina web di Spotify."
                },
                {
                    title: "Discord",
                    image: "discord.png",
                    description: "Questa è una rappresentazione della pagina web di Discord."
                },
                {
                    title: "DC Comics",
                    image: "dc_comics.jpg",
                    description: "Questa è una rappresentazione della pagina web della DC Comics."
                },
                {
                    title: "Mittern",
                    image: "mittern.png",
                    description: "Questa è una rappresentazione di una Cartoon Agency."
                }

            ]


        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <div id="works" class="container">
        <div class="row">
            <div class="col-12 p-3">
                <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">Works.</h2>
            </div>
            <!-- stampo nella pagina utilizzando i metodi di vue -->
            <div class="col-12">
                <div class="row justify-content-center g-4">
                    <div class="col-lg-5 card p-0 m-2" v-for="event in events">
                        <img class="card-img" :src="event.image" :alt="event.title">
                        <div class="card-img-overlay text-white p-0 ">
                            <h3 class="card-title my-5 fw-bold">{{ event.title }}</h3>
                            <p class="card-text d-none my-5 p-3 fw-bold">{{ event.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {

    img {
        filter: brightness(0.3);
        height: 100%;
    }

    .card-img-overlay {
        text-align: center;
    }

    .card-text {
        width: 100%;
        height: 100%;
    }

    &:hover {
        opacity: 0.7;

        .card-text {
            display: flex !important;
            justify-content: center;
            align-items: center;
            padding: 0 !important;
            margin: 0 !important;
        }

        .card-title {
            display: none;
        }
    }


}
</style>