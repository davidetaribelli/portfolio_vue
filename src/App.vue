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
<!-- richiamo app header -->
<header>
  <AppHeader/>
</header>
<!-- richiamo app main -->
<main>
  <AppMain />
</main>

<footer>

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
