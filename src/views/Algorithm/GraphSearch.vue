<template>
    <div class="bfs-html flex1 flex-col" height="100%">
        <div class="m20 wp100">
            <div class="m20">
                <el-row :gutter="20" class="mb10">
                <el-col :span="5">
                    <el-input
                        v-model="from"
                        class="w-50 m-2 wp100"
                        placeholder="起始节点"
                    />
                </el-col>
                <el-col :span="5">
                    <el-input
                        v-model="to"
                        class="w-50 m-2 wp100"
                        placeholder="结束节点"
                    />
                </el-col>
                <el-col :span="12">
                    <el-button 
                        type="primary"
                        @click="handleAdd"
                    >
                    新增
                    </el-button>
                </el-col>
            
                
            </el-row>   
            <el-row :gutter="20">
                <el-col :span="5">
                    <el-input
                        clearable
                        v-model="sfrom"
                        class="w-50 m-2 wp100"
                        placeholder="起始节点"
                    />
                </el-col>
                <el-col :span="5">
                    <el-input
                        v-model="sto"
                        class="w-50 m-2 wp100"
                        placeholder="结束节点"
                    />
                </el-col>
                <el-col :span="10">
                    <el-button 
                        type="primary"
                        @click="handleSearch('bfs')"
                    >
                    广度遍历
                    </el-button>
                    <el-button 
                        type="primary"
                        @click="handleSearch('dfs')"
                    >
                    深度遍历
                    </el-button>
                    <el-button 
                        type="primary"
                        @click="initNodeBg"
                    >
                    重置
                    </el-button>
                </el-col>
            
                
            </el-row>
            </div>
              
        </div>
        
        <div ref="chart" class="flex1"></div>
    </div>
    
  </template>
  
  <script>
  import * as vis from 'vis';
  import { Graph } from './graph'
  export default {
    name: 'BFSAnimation',
    data(){
        return {
            from:"",
            to:"",
            sfrom:"1",
            sto:"",
            myGraph: new Graph(100),
            nodes: new vis.DataSet(),
            edges: new vis.DataSet(),
            network:null,
            nodeBg:'#e4e4fd',
            nodeBorder:'#4b42ac',
            nodeBg2:'#4b42ac',
            nodeBorder2:'#e4e4fd',
            options:{
                autoResize: true, 
                // layout:{
                //     randomSeed:1,
                //     hierarchical: {
                //         enabled:true,
                //         direction: 'UD',
                //         sortMethod: 'directed',
                //     }
                // },
                nodes:{
                    margin:{
                        top:8,
                        bottom:8,
                        left:24,
                        right:24,
                    },
                    shape: 'box',
                    color:{
                        background: '#e4e4fd',
                        border: '#4b42ac',//节点边框颜色
                    },
                    font:{
                        color:'#4b42ac',
                        size:16
                    },
                },
                edges:{
                    arrows:{
                        to: true,
                    },
                },
                
            }
        }
    },
    methods:{
        initNodeBg(){
            let nodes = this.myGraph.getNodes();
            for(let i of nodes){
                this.network.body.data.nodes.update({ id: i, color: {
                    border:this.nodeBorder,
                    background:this.nodeBg,
                },font:{
                    color: this.nodeBorder
                }});
            }
        },
        handleSearch(type){
            let self = this;
            this.initNodeBg();
            this.myGraph[type](this.sfrom,function(node){
                console.log(node)
                self.network.body.data.nodes.update({ id: node, color: self.nodeBg2, font: { color:self.nodeBorder2}});
            })
        },
        addVisNode(node){
            if(!this.myGraph.hasNode(node)){
                this.nodes.add({
                    id: node,
                    label: node
                });
            }
        },
        addNodes(from, to){
            this.addVisNode(from);
            this.addVisNode(to);
            this.myGraph.addEdge(from,to);
            this.edges.add({
                from: from,
                to: to
            });
        },
        handleAdd(){
            if(!this.from || !this.to) return;
            this.addNodes(this.from, this.to)
       }, 
       initGraph(){
        const layer = 5
        for(let i=1;i<Math.pow(2,layer);i++){
            console.log(i)
            this.addNodes(i.toString(),(i*2).toString())
            this.addNodes(i.toString(),(i*2+1).toString())
        }
       },  
       initGraph1(){
        this.addNodes("1","2");
        this.addNodes("1","3");
        this.addNodes("1","7");
        this.addNodes("1","8");
        this.addNodes("2","3");
        this.addNodes("2","4");
        this.addNodes("2","5");
        this.addNodes("3","5");
        this.addNodes("5","6");
        this.addNodes("4","6");
        this.addNodes("8","9");
        this.addNodes("7","6");
       }
    },
    created(){
        
    },
    mounted() {
        var data = {
            nodes: this.nodes,
            edges: this.edges,
        };
        this.network = new vis.Network(this.$refs.chart, data, this.options);
        this.network.moveTo({scale:0.3}); 
        this.initGraph()
    }
  };
  </script>
  