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

</style>