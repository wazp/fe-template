<template>
    <svg v-bind:viewBox="viewbox" v-bind:width="width" height="100%">
        <use v-bind:xlink:href="icon"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon',
        props: ['type'],
        mounted () {
            this.viewbox = this.getViewbox()
            this.width = this.calcWidth()
        },
        data() {
            return {
                icon: '#' + this.type,
                viewbox: null,
                width: null
            }
        },
        methods: {
            getViewbox () {
                let id = this.type
                let svg = document.getElementById(id)
                let viewbox = svg.getAttribute('viewBox')
                return viewbox
            },

            calcWidth () {
                let id = this.type
                let svg = document.getElementById(id)
                let viewbox = svg.getAttribute('viewBox')
                let viewboxArr = viewbox.split(/\s+|,/)
                let width = ((viewboxArr[2] / viewboxArr[3]) / 2) * 100 + '%'
                return width
            }
        }
    }
</script>
