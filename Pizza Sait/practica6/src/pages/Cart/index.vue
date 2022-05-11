<template>
    <div>
        <router-link to="/Home">Home</router-link>
        <main-master-page> 
            <cart-info/>
        </main-master-page>

    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage'
import CartInfo from '@/components/CartInfo/index.vue'




    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"Cart",
        components: {
            MainMasterPage,
            CartInfo
          

             
        },
    }
</script>

<style lang="scss" scoped>

</style>