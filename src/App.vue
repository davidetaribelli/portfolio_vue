<script>
import AppMain from './pages/AppMain.vue';
import AppHeader from './pages/AppHeader.vue';
import AppFooter from './pages/AppFooter.vue';

export default {
    data() {
        return {

        }
    },
    components:{
      AppHeader,
      AppMain,
      AppFooter
    }
}
</script>

<template>
<!-- richiamo app header -->
<header>
  <AppHeader/>
</header>
<!-- richiamo app main -->
<main>
  <AppMain />
</main>

<footer>
  <AppFooter />
</footer>

</template>

<style lang="scss">
@use './style.scss' as *;

header,
main,
footer{
  background-color: #31231f;
}
</style>
