<template>
    <div>
        <p>This is a test vue component, which is part of the initial build process.</p>
        {{#vuex}}
        <button @click="buttonClick">Click to count up store variable</button>
        {{/vuex}}
    </div>
</template>

<script>
    export default {
        name: 'test',
        {{#vuex}}
        methods: {
            buttonClick() {
                this.$store.commit('clickUp')
            }
        },
        {{/vuex}}
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    p{font-size:16px;color:#fff;background:#000;}
</style>