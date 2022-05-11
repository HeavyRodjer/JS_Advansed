<template>
    <div>
        <div>
            <h1>Моя піцерія</h1>
            <slot name="header" :pOwner="owner">
                <h2>Home</h2>
               
            </slot>
        </div>
        <div>
            <slot >
                ---------
            </slot>

        </div>
        <div>
            <slot name="footer">
                <h1>Контакти</h1>
                <ul>
                    <li>Тел:+3802312131</li>
                    <li>Адерса: м.Ужгород</li>
                </ul>
            </slot>
        </div>


    </div>
</template>

<script>
    export default {
        name:"MainMasterPage",
        props: {
      owner: {
        type: Object,
        default: null
      },
    },
    }
</script>

<style lang="scss" scoped>

</style>