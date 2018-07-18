<template>
    <div>
        <p>This is the startpage. Go to <router-link to="/second">second page</router-link>.</p>
    </div>
</template>

<script>
export default {
    name: 'Start'
}
</script>

<style lang="less" scoped>
    p{font-size:16px;color:#fff;background:#000;}
    a{color:aqua;}
</style>