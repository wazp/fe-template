<template>
    <li class="Slider-item">        
        <img :src="obj.image">
    </li>
</template>

<script>
export default {
    name: "item",
    props: ['obj'],
}
</script>

<style lang="less" scoped>
    @import "../../../Assets/Styles/common/_variables.less";
    @import "../../../Assets/Styles/common/_mixins.less";

    .Slider-item{
        text-align: center;
        height: auto;
        background: transparent;
    }
</style>