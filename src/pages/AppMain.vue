<script>
import EventCard from '../components/EventCard.vue';
import AppJumbo from '../components/AppJumbo.vue'
import AppAbout from '../components/AppAbout.vue'
import AppExperience from '../components/AppExperience.vue';
import AppSkills from '../components/AppSkills.vue';

export default {
    name: "AppMain",
    data() {
        return {

        }
    },
    components:{
        
        AppJumbo,
        AppAbout,
        AppExperience,
        EventCard,
        AppSkills

    }
}
</script>

<template>
    <!-- richiamo la pagina app jumbo -->
    <section>
        <AppJumbo/>
    </section>

    <!-- richiamo la pagina app about -->
    <section>
        <AppAbout />
    </section>

    <!-- richiamo la pagina app experience -->
    <section>
        <AppExperience/>
    </section>

    <!-- richiamo la pagina event card -->
    <section>
        <EventCard />
    </section>

    <!-- richiamo la pagina app skills -->
    <section>
        <AppSkills />
    </section>
</template>

<style lang="scss" scoped>
section{
    margin: 0;
}
</style>