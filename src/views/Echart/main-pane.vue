<template>
  <div class="main-pane-html flex1">
    <linechart class="chart" id="chart1" idName="chart1"></linechart>
    <linechart2 class="chart" id="chart2" idName="chart2"></linechart2>
  </div>
</template>

<script setup>
import linechart from './linechart.vue'
import linechart2 from './linechart2.vue'
</script>

<style lang="scss">
.main-pane-html{
  display: flex;
  flex-wrap: wrap;
  .chart{
    width: 20vw;
    height: 15vw;
    min-height: 300px;
    min-width: 400px;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin:10px;
    margin-top: 30px;
  }
}
</style>