<template>
    <div>
        <div>
            {{value}}
        </div>
        <div>
            <button @click="$emit(OnChange(+1))">+1</button>
            <button @click="$emit(OnChange(-1))">-1</button>
        </div>
        <div>
            {{numberType}}
        </div>

    </div>
</template>

<script>
    export default {
        name: "CalculationNum",
        props: {
            currentValue: {
                type: Number,
                default: 0
            },
            props: {
                lastIncrement: {
                    type: Number,
                    default: 0
                },
            },
        },
        computed: {
           numberType() {
                if(this.currentValue>0) return 'Positive'
                if(this.currentValue<0) return 'Negative'
                else return 'Zero'
            },
            
            
    } ,
    methods: {
        OnChange(increment) {
            this.$emit("update:lastIncrement", increment);
            this.$emit("update:currentValue", this.currentValue + increment)
            
        }
    }, 
 
    }
    
   
</script>

<style lang="scss" scoped>

</style>