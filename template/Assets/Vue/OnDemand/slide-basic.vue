<template>
    <li class="Slider-item" :style="{backgroundImage: 'url('+result.image+')'}">
        <div class="u-alignMiddleTranslate">
            <h3 v-text="result.headline"></h3>
            <p v-text="result.text"></p>
        </div>
    </li>
</template>

<script>
export default {
    name: "item",
    props: ['result']
}
</script>

<style lang="less" scoped>
    @import "../../../Assets/Styles/common/_variables.less";
    @import "../../../Assets/Styles/common/_mixins.less";

    p {
        font-size: 1rem;
        white-space: normal;
        line-height: 1.5;
    }

    .Slider-arrow {
        display: none;
        @media @bpMedium {
            display: block;
        }
    }

    .Slider-item {
        font-size: 1rem;
        line-height: 1rem;        
        width: 100%;
        position: relative;
        display: inline-block;
        height: 100px;
        background-color: @colorGrey;
        background-size: cover;
        color: white;

        > div {
            text-align: center;
        }
    }
</style>