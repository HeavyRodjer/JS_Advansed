<template>
<calculation-num 
v-model:current-value = "currentValue"
v-model: last-increment= "lastIncrement"
/>
 
</template>

<script>
import CalculationNum from './components/CalculationNum'

export default {
  name: 'App',
  components: {
    CalculationNum

  },
  data() {
    return {
      currentValue: 0,
      lastIncrement:null
    }
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
