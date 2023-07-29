<script>
export default {
    name: "AppJumbo",
    data() {
        return {
            items: ["Front-end", "Web", "Back-end"]
        }
    },
    methods: {
        rotateItems() {
            const lastItem = this.items.pop();
            this.items.unshift(lastItem);
        }
    },
    mounted() {
        setInterval(() => {
            this.rotateItems();
        }, 2000);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex flex-wrap">
                <h1 class="c_lightbrown_1 f_"> Benvenuto! Sono Davide Taribelli </h1>
                <div class="carousel d-flex flex-column align-items-center">
                    <transition-group name="slide">
                        <div class="carousel-item my-3 p-3 rounded-3 d-flex text-align-center bg_lightbrown_2 c_lightbrown_1" v-for="item in items" :key="item">
                            {{ item }}
                        </div>
                    </transition-group>
                </div>
                <div class="d-flex align-items-center mx-5 p-1">
                    <h3 class="c_lightbrown_1">Developer</h3>
                </div>
            </div>
            <div class="col-6">
                <div class="img">
                    <img src="../assets/img/dt-low-resolution-logo-color-on-transparent-background.png" alt="profilo">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 70%;
}

.carousel {
    max-width: 200px;
}
</style>