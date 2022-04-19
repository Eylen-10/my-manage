<template>
    <div class="login-html">
            <div class="login-box">
                <div class="left">
                    <img :src="bg">
                </div>
                <div class="right flex1 flex-col">
                    <div class="login-content wp100">
                        <div class="header">LOGIN</div>
                        <div class="form">
                            <el-row class="flex-row">
                                <el-col :span="6">账号：</el-col>
                                <el-col :span="18">
                                    <el-input class="wp100" v-model="oLogin.account"></el-input>
                                </el-col>
                            </el-row>
                             <el-row class="flex-row">
                                <el-col :span="6">密码：</el-col>
                                <el-col :span="18">
                                    <el-input class="wp100" v-model="oLogin.password" type="password"></el-input>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-button color="3b3ebb" type="primary"  class="wp100 mt30" @click="login">登录</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import bg from 'assets/bg.png'
import  { useUserStore }  from '../../store'

const instance = getCurrentInstance() as any;
const $message = inject('$message') as any;
const router = useRouter()
const user = useUserStore()

const oLogin = reactive({
    account:'TEST',
    password:'TEST',
})

function login(){
    user.setUser(oLogin.account)
    $message({
        message:'登录成功',
        type:'success'
    })
    router.push('/')
}

</script>

<style lang="scss" scoped>
.login-html{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #3b3ebb;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-box{
        width: 90vw;
        max-width: 1428.5px;
        height: 47.25vw;
        max-height: 750px;
        border-radius: 10px;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;   
        overflow: hidden;
        .left{
            width:63vw;
            max-width: 1000px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            padding-top: -2vw;
            padding: 0 2vw;
            background-color: #f6f6fc;
            .header{
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 2px;
                text-indent: 2px;
                margin-bottom: 3vw;
            }
            .el-row{
                margin-bottom: 20px;
            }
        }
    }
}
</style>