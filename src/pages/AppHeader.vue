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
                    <img src="../assets/img/dt-low-resolution-logo-color-on-transparent-background.png" alt="logo" width="35"
                        height="25">
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#experience">EXPERIENCE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#works">WORKS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#skills">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  c_lightbrown_1" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    height: 150px;
    background-image: linear-gradient(#0b0e0e 3rem, rgba(11, 14, 14, 0));
}

.nav-item {
    a {
        &:hover {
            color: #8b6d57;
        }
    }
}
</style>