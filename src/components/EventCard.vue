<script>
import axios from 'axios';

export default {
    name: "EventCard",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            loading: false,
            loadingError: false,
            events: [],
        }
    },
    methods: {
        //metodo per utilizzare axios
        getEvents() {
            this.loading = true;
            axios.get(this.apiUrl + "events").then((response) => {
                this.events = response.data.results;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = "Errore nel caricamento dei dati";
            });
        }

    },
    mounted() {
        this.getEvents();
    }
}
</script>

<template>
    <div id="works" class="container">
        <div class="row">
            <!-- utilizzo il caricamento in corso nel caso di errori -->
            <div class="col-12 p-3">
                <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">Works.</h2>
                <h6 v-if="loading">Caricamento in corso</h6>
                <h6 v-if="loadingError">{{ this.loadingError }}</h6>
            </div>
            <!-- stampo nella pagina utilizzando i metodi di vue -->
            <div class="col-12">
                <div class="row justify-content-center g-4">
                    <div class="col-lg-5 card p-0 m-2" v-for="event in events">
                        <img class="card-img" :src="'http://127.0.0.1:8000/storage/' + event.image" :alt="event.title">
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