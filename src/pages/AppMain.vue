<script>
import EventCard from '../components/EventCard.vue';
import AppAbout from '../components/AppAbout.vue';
export default {
    name: "AppMain",
    data() {
        return {

        }
    },
    components:{
        EventCard,
        AppAbout,
    }
}
</script>

<template>
    <!-- richiamo la pagina app about -->

    <section>
        <AppAbout/>
    </section>
    <!-- richiamo la pagina event card -->
    <section>
        <EventCard />
    </section>
</template>

<style lang="scss" scoped>
section{
    margin: 0;
}
</style>