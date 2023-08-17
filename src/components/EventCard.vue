<script>


export default {
    name: "EventCard",
    data() {
        return {
            events: [
                {
                    title: "Coding Challenge",
                    image: "codingchallenge.png",
                    description: "Questo è stato il mio primo progetto, grazie a questo sono riuscito ad entrare in Boolean. Non è nulla di complesso, ho utilizzato solo HTML e CSS. Nonostante ciò ricordo che mi aveva dato parecchie difficoltà, sono arrivato al punto in cui stavo per abbandonare. Poi decisi di ricominciare, eliminai tutto e lo feci da 0.Quella sera consegnai il progetto e dopo qualche giorno mi arrivò l\'email da parte di Boolean, dicendomi che mi avevano preso.\nHo deciso di mettere questo progetto perchè stato il primo di una lunga serie e forse anche quello a cui sono più affezionato."
                },
                {
                    title: "Spotify",
                    image: "spotify.jpg",
                    description: "In questo progetto viene rappresentata la pagina web di Spotify. Ho utilizzato HTML e CSS per la creazione di questa pagina. È stato il primo tra i progetti più complicati datomi da Boolean. Per la prima volta ho dovuto creare una navbar e non vi dico quanto ci ho messo per creare le linee per volume e tempo. Ma per come sono fatto più è complicato e più mi piace."
                },
                {
                    title: "Discord",
                    image: "discord.png",
                    description: "Questa è una rappresentazione della pagina web di Discord. Questo progetto ha avuto una durata di 3 giorni. Nel primo giorno ho dovuto creare il layout. Nel secondo ho iniziato a mettere i primi elementi all'interno del layout creato in precedenza. Il terzo giorno era per le rifiniture. È stato davvero divertente fare questo progetto, sia per la complessità di creare per la prima volta una pagina con tutti questi elementi, sia per il metodo di lavoro utilizzato( layout - elementi - rifiniture )."
                },
                {
                    title: "DC Comics",
                    image: "dc_comics.jpg",
                    description: "Questa è una rappresentazione della pagina web di Discord. Questo progetto ha avuto una durata di 3 giorni. Nel primo giorno ho dovuto creare il layout. Nel secondo ho iniziato a mettere i primi elementi all'interno del layout creato in precedenza. Il terzo giorno era per le rifiniture. È stato davvero divertente fare questo progetto, sia per la complessità di creare per la prima volta una pagina con tutti questi elementi, sia per il metodo di lavoro utilizzato( layout - elementi - rifiniture )."
                },
                {
                    title: "Mittern",
                    image: "mittern.png",
                    description: "Questa è una rappresentazione della pagina web di Discord. Questo progetto ha avuto una durata di 3 giorni. Nel primo giorno ho dovuto creare il layout. Nel secondo ho iniziato a mettere i primi elementi all'interno del layout creato in precedenza. Il terzo giorno era per le rifiniture. È stato davvero divertente fare questo progetto, sia per la complessità di creare per la prima volta una pagina con tutti questi elementi, sia per il metodo di lavoro utilizzato( layout - elementi - rifiniture )."
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
                            <p class="card-text my-5 p-3 fw-bold">{{ event.description }}</p>
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
        display: none;
    }

    &:hover {
        opacity: 0.7;

        .card-text {
            display: block;

        }

        .card-title {
            display: none;
        }
    }


}
</style>