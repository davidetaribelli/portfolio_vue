<script>
export default {
    name: "AppAbout",
    data() {
        return {

        }
    }
}
</script>


<template>
    <div id="about" class="container">
        <div class="row">
            <div class="col-12 p-3">
                <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">About.</h2>
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="img_">
                            <img src="../assets/img/IMG_DE4ED5D777BF-1-min.jpeg" alt="profilo">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="c_lightbrown_1 my-5 py-3">
                            Sono Davide. <br>
                            Fin da bambino ho manifestato la <b>passione</b> per il mondo della programmazione, ma alcune scelte
                            della mia vita mi hanno portato in percorsi differenti. <br>
                            Questo mi ha permesso di <b>crescere</b> sotto diversi aspetti e di provare per alcuni anni a lavorare
                            in <b>team</b>, a rispettare delle <b>scadenze</b> e a sperimentarmi in un lavoro che richiedeva <b>apprendimento
                            continuo</b>, <b>analisi</b> e <b>valutazione</b> della situazione. <br>
                            Mi trovo a concludere un percorso formativo da Full-Stack Web Developer e cerco un’azienda in
                            cui continuare a formarmi attraverso l’esperienza lavorativa. <br>
                            Ho ancora da <b>imparare</b> e ho la consapevolezza che si tratta di un mondo infinito, ma mi <b>affascina</b>
                            continuare ad <b>apprendere</b> e sono <b>determinato</b> a farlo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img_ {
    width: 300px;
    height: 300px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>