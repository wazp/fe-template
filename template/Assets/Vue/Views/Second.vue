<template>
    <div>
        <p>This is the second page. Go back to the <router-link to="/">start page</router-link>.</p>
    </div>
</template>

<script>
export default {
    name: 'Second'
}
</script>

<style lang="less" scoped>
    p{font-size:16px;color:#fff;background:#000;}
    a{color:aqua;}
</style>