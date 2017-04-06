<template>
    <div id="app" class="container-fluid">
        <div class="panel panel-default blur-background info">
            <div class="panel-background"></div>
            <div class="panel-body">
                <div class="external-container">
                    <div class="internal-container">
                        <h1>Learning</h1>
                        <hr />
                        <p>It's cool!</p>
                    </div>
                </div>
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

    @panel-main-color: rgba(255,255,255,1.0);
    @panel-body-color: fade(@panel-main-color, 60%);

    .panel.blur-background {
        margin-top: 50px;
        position:relative;
        overflow: hidden;
        background-color: @panel-body-color;
        border-color: @panel-main-color;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        transition: box-shadow .3s ease;
    }

    .panel.blur-background .panel-body {
        padding: 4px;
    }

    @borderDiff: rgba(10,10,10,100%);

    .panel.blur-background .external-container {
        border-left: 1px solid @panel-body-color - @borderDiff;
        border-top: 1px solid @panel-body-color - @borderDiff;

        border-right: 1px solid @panel-main-color;
        border-bottom: 1px solid @panel-main-color;

        border-radius: 6px;
    }

    .panel.blur-background .internal-container {
        border-left:1px solid @panel-main-color;
        border-top:1px solid @panel-main-color;

        border-right:1px solid @panel-body-color - @borderDiff;
        border-bottom:1px solid @panel-body-color - @borderDiff;

        padding: 12px;
        border-radius: 5px;
    }

    @redDiff: rgba(0, 15, 15, 20%);
    @greenDiff: rgba(15, 0, 15, 20%);
    @blueDiff: rgba(15, 15, 0, 20%);

    .panel.blur-background.error {
        background-color: @panel-body-color - @redDiff;
        border-color: @panel-main-color - @redDiff;
    }

    .panel.blur-background.error .external-container {
        border-left-color: @panel-body-color - @borderDiff - @redDiff;
        border-top-color: @panel-body-color - @borderDiff - @redDiff;
        border-right-color: @panel-body-color - @redDiff;
        border-bottom-color: @panel-body-color - @redDiff;
    }

    .panel.blur-background.error .internal-container {
        border-left-color: @panel-body-color - @redDiff;
        border-top-color: @panel-body-color - @redDiff;
        border-right-color: @panel-body-color - @borderDiff - @redDiff;
        border-bottom-color: @panel-body-color - @borderDiff - @redDiff;
    }

    .panel.blur-background.success {
        background-color: @panel-body-color - @greenDiff;
        border-color: @panel-main-color - @greenDiff;
    }

    .panel.blur-background.success .external-container {
        border-left-color: @panel-body-color - @borderDiff - @greenDiff;
        border-top-color: @panel-body-color - @borderDiff - @greenDiff;
        border-right-color: @panel-body-color - @greenDiff;
        border-bottom-color: @panel-body-color - @greenDiff;
    }

    .panel.blur-background.success .internal-container {
        border-left-color: @panel-body-color - @greenDiff;
        border-top-color: @panel-body-color - @greenDiff;
        border-right-color: @panel-body-color - @borderDiff - @greenDiff;
        border-bottom-color: @panel-body-color - @borderDiff - @greenDiff;
    }

    .panel.blur-background.info {
        background-color: @panel-body-color - @blueDiff;
        border-color: @panel-main-color - @blueDiff;
    }

    .panel.blur-background.info .external-container {
        border-left-color: @panel-body-color - @borderDiff - @blueDiff;
        border-top-color: @panel-body-color - @borderDiff - @blueDiff;
        border-right-color: @panel-body-color - @blueDiff;
        border-bottom-color: @panel-body-color - @blueDiff;
    }

    .panel.blur-background.info .internal-container {
        border-left-color: @panel-body-color - @blueDiff;
        border-top-color: @panel-body-color - @blueDiff;
        border-right-color: @panel-body-color - @borderDiff - @blueDiff;
        border-bottom-color: @panel-body-color - @borderDiff - @blueDiff;
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