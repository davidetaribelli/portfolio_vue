<script>
import EventCard from '../components/EventCard.vue';
export default {
    name: "AppMain",
    data() {
        return {

        }
    },
    components:{
        EventCard,
    }
}
</script>

<template>
    <section class="projects">
        <EventCard />
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #31231f;
}
</style>