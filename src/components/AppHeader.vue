<script>
export default {
    name: "AppHeader",
    data() {
        return {

        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <div class="container">
                <a class="navbar-brand" href="/events">
                    <img src="public\dt-low-resolution-logo-color-on-transparent-background.png" alt="logo" width="35" height="25">
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#">EXPERIENCE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#">WORKS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar{
    background: rgb(49,35,31);
background: linear-gradient(180deg, rgba(49,35,31,1) 7%, rgba(0,0,0,0.0844712885154062) 40%);
}
</style>