<script>
export default {
    name: "AppSkills",
    data() {
        return {

        }
    }
}
</script>

<template>
    <div id="skills" class="container">
        <div class="row justify-content-between">
            <div class="col-12 p-3">
                <h2 class="c_lightbrown_1 my-5 py-3 border-bottom">Skills.</h2>
            </div>
            <div class="col-lg-5 c_lightbrown_1">
                <h3>Front-end.</h3>
                <div class="d-flex justify-content-between p-5">
                    <ul>
                        <li class="fs-5">HTML5</li>
                        <li class="fs-5">CSS3</li>
                        <li class="fs-5">Bootstrap</li>
                        <li class="fs-5">SASS</li>
                    </ul>
                    <ul>
                        <li class="fs-5">JavaScript</li>
                        <li class="fs-5">Vue</li>
                        <li class="fs-5">Axios</li>
                    </ul>
                </div>
            </div>
            <div class="col-2  d-none d-lg-block d-flex justify-content-center p-3">
                <div class="line_ bg_lightbrown_1"></div>
            </div>
            <div class="col-lg-5 c_lightbrown_1">
                <h3>Back-end.</h3>
                <div class="d-flex justify-content-between p-5">
                    <ul>
                        <li class="fs-5">PHP</li>
                        <li class="fs-5">Laravel</li>
                    </ul>
                    <ul>
                        <li class="fs-5">MySQL</li>
                        <li class="fs-5">PHPMyAdmin</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    li{
        list-style-type: square;
    }

    .line_{
        width: 2px;
        height: 100%;
    }
</style>