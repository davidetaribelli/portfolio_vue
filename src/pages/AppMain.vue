<script>
import EventCard from '../components/EventCard.vue';
import AppJumbo from '../components/AppJumbo.vue'
import AppAbout from '../components/AppAbout.vue'
import AppExperience from '../components/AppExperience.vue';
import AppSkills from '../components/AppSkills.vue';
import AppContact from '../components/AppContact.vue';

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
        AppSkills,
        AppContact

    }
}
</script>

<template>
    <!-- richiamo la pagina app jumbo -->
    <section>
        <AppJumbo/>
    </section>

    <!-- richiamo la pagina app about -->
    <section class="bg_lightbrown_2">
        <AppAbout />
    </section>

    <!-- richiamo la pagina app experience -->
    <section>
        <AppExperience/>
    </section>

    <!-- richiamo la pagina event card -->
    <section class="bg_lightbrown_2">
        <EventCard />
    </section>

    <!-- richiamo la pagina app skills -->
    <section>
        <AppSkills />
    </section>

    <!-- richiamo la pagina app contact -->
    <section class="bg_lightbrown_2">
        <AppContact />
    </section>
</template>

<style lang="scss" scoped>
section{
    margin: 0;
}
</style>