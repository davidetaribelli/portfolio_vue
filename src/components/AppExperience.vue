<script>
export default {
    name: "AppExperience",
    data() {
        return {

        }
    }
}
</script>


<template>
    <div id="experience" class="container">
        <div class="row">
            <div class="col-12 p-3">
                <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">Experience.</h2>
            </div>
            <div class="col-lg-7 c_lightbrown_1 d-flex flex-wrap align-items-center">
                <div class="col-3 square_">
                    <img src="../assets/img/logo copia.png" alt="logo-boolean">
                </div>
                <div class="col-lg-9 d-flex align-items-center">
                    <h3 class="mx-3">Boolean Careers</h3>
                    <a href="https://boolean.careers/" target="_blank">
                        <i class="fa-solid fa-link c_lightbrown_4"></i>
                    </a>
                </div>
                <div class="col-12 my-3">
                    <h4>Full Stack Web Developer Trainee</h4>
                    <p>Durante i 6 mesi di corso ho avuto modo di fare molta pratica con diversi progetti ispirati alle più
                        famose web applications come Whatsapp Web, Spotify Web, Netflix e molte altre.
                        Le principali tecnologie che ho utilizzato sono: 
                        <ul>
                            <li>HTML</li>
                            <li>CSS( SASS )</li>
                            <li>JavaScript (Vue e Axios)</li>
                            <li>PHP (Laravel)</li>
                            <li>MySql</li>
                        </ul>
                    </p>
                </div>
            </div>



        </div>
    </div>
</template>

<style lang="scss" scoped>
.square_ {
    width: 50px;
    height: 50px;

    img {
        width: 100%;
    }
}
</style>