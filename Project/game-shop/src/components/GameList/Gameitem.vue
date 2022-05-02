// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div>
        <div>
            <img :src="gameItem.url" >
        <span>{{gameItem.title}}</span>
        <span>{{gameItem.price}}</span>
        <button @click="$emit('buy')"> Купити</button>

        </div>

    </div>
</template>

<script>
    export default {
        name:"GameItem",
        props: {
            gameItem: {
                type: Object,
                default: ()=>{}
            },
        },
        
    }
</script>

<style lang="scss" scoped>

</style>