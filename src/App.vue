<script>
import AppMain from './pages/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    data() {
        return {

        }
    },
    components:{
      AppHeader,
      AppMain,
    }
}
</script>

<template>
<header>
  <AppHeader/>
</header>

<main>
  <AppMain />
</main>

<footer>

</footer>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
