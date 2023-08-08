<script>
export default{
    name: "AppContact",
    data(){
        return{

        }
    }
}
</script>

<template>
<div class="container py-3">
    <div class="row">
        <div class="col-12">
            <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">Contact.</h2>
        </div>
        <div class="col-6">
            <div class="d-flex align-items-center c_lightbrown_1 fs-3 border-bottom p-3">
                <i class="fa-solid fa-at"></i>
                <h3 class="mx-3">
                    <a class="text-decoration-none c_lightbrown_1" href="mailto:davide.taribelli@gmail.com">Send Email</a>
                </h3>
            </div>
            <div class="d-flex align-items-center c_lightbrown_1 fs-3 border-bottom p-3">
                <i class="fa-brands fa-linkedin"></i>
                <h3 class="mx-3">
                    <a class="text-decoration-none c_lightbrown_1" href="https://www.linkedin.com/in/davidetaribelli/" target="_blank">LinkedIn</a>
                </h3>
            </div>
            <div class="d-flex align-items-center c_lightbrown_1 fs-3 border-bottom p-3">
                <i class="fa-brands fa-github"></i>
                <h3 class="mx-3">
                    <a class="text-decoration-none c_lightbrown_1" href="https://github.com/davidetaribelli" target="_blank">GitHub</a>
                </h3>
            </div>
            <div class="d-flex align-items-center c_lightbrown_1 fs-3 border-bottom p-3">
                <i class="fa-solid fa-download"></i>
                <h3 class="mx-3">
                    <a class="text-decoration-none c_lightbrown_1" href="https://ibb.co/b7KVZYv" download="Davide-Taribelli-CV"  target="_blank">Download CV</a>
                </h3>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
a{
    &:hover{
        color: #7C4E29;
    }
}
</style>