<template>
  <div class="insert-sort-html flex-row pt100">
    <div class="box">
        <div class="item" 
            v-for="( item,index ) in values" 
            :key="item.id" 
            :class="{'active':item.id == curObj.id,'curIndex':index == currentIndex}" 
            :style="{height: (item.val*50)+'px'}">
            {{ item.val }}
        </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'InsertSort',
    data () {
      return {
        values:[],
        curObj:{},
        currentIndex: 1 // 当前排序位置，从第二个元素开始
      };
    },
    watch: {},
    created() {
        for(let i=0;i<10;i++){
            this.values.push({
                id: i,
                val : Math.ceil(Math.random() * 10)
            })
        }
        this.sort();
    },
    methods: {
        async sort(){
            if(this.currentIndex < this.values.length) {
                let currentVal = this.values[this.currentIndex];
                this.curObj = this.values[this.currentIndex]
                let j = this.currentIndex - 1;
                while(j >= 0 && this.values[j].val> currentVal.val) {
                    this.values[j+1] = this.values[j];
                    j--;
                }
                this.values[j+1] = currentVal;
                await new Promise(resolve => setTimeout(resolve, 500)); // 等待1秒
                this.currentIndex++;
                setTimeout(this.sort, 500); // 1秒后再继续排序
            }else{
                this.curObj = {}
            }
        }
    },
    computed: {}
  }
</script>
<style lang='scss' scoped>
.insert-sort-html{
    
    .box{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .item{
        background:#e4e4fd;
        border: 1px solid #5758b8;
        color:#5758b8;
        margin: 10px;
        width: 30px;
        height: 50px;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        justify-content: center;
    }
    .active{
        color:#e4e4fd;
        background:#9a9bdf;
    }
    .curIndex{
        color:#e4e4fd;
        background:#5758b8;
    }
}
</style>