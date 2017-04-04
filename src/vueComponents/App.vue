<template>
    <div id="app" class="container-fluid">
        <div class="panel panel-default blur-background">
            <div class="panel-background"></div>
            <div class="panel-body">
                <h1>Learning</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {

        }
    }
}
</script>

<style lang="less">
    html, body {
        min-height: 100%;
        height: 100%;
    }

    body {
        background: url("../images/backgrounds/gold_scale.png") top center repeat;
    }

    .panel.blur-background {
        margin-top: 50px;
        position:relative;
        overflow: hidden;
        background-color: rgba(255,255,255,0.6);
        border-color: #fff;
    }

    .panel.blur-background .panel-background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url("../images/backgrounds/gold_scale_blur.png") top center repeat;
        z-index: -1;
    }
</style>