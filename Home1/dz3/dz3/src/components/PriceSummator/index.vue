<template>
    <div>
        <product-price-editor />
        <div>
            Total {{priceSum}}
        </div>
    </div>
</template>

<script>
import ProductPriceEditor from '../../components/PriceSummator/ProductPriceEditor/'

    export default {
        name: 'PriceSummator',
        components: {
            ProductPriceEditor,
        },
        props: {
            priceSum: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                productPrice: [{
                    title:'Prod1',
                    price: 0,
                    count: 0,
                    tax: 0
                },
                {
                    title:'Prod2',
                    price: 0,
                    count: 0,
                    tax: 0
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>