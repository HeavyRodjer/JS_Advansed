<template>
    <div >
        <div v-for="(product,index) in productPrice" :key="index">
            {{title}}
            <input type="number" v-model="product.price"> Не змінюйте властивостей. 
            <input type="number" v-model="product.count">
            <input type="number" v-model="product.tax">
        </div>
    </div>
</template>

<script>
    export default {
        name:'ProductPriceEditor',
        props: {
            productPrice: {    
                type: Array,
                default: () => []
            },

        },
    }
</script>

<style lang="scss" scoped>

</style>
