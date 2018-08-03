<template>
    <li class="Slider-item" :style="{backgroundImage: 'url('+obj.image+')'}">
        <div class="u-alignMiddleTranslate">
            <h3>{{obj.headline}}</h3>
            <p>{{obj.text}}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "item",
    props: ['obj'],
    mounted(){
        console.log('this.obj', this.obj)
    }
}
</script>

<style lang="less" scoped>

</style>