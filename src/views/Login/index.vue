<template>
    <div class="login-html">
            <div class="login-box">
                <div class="left">
                    <img :src="bg">
                </div>
                <div class="right flex1">
                    <div class="login-content">
                        <div class="header pt50 ">LOGIN</div>
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
    // background: url('assets/bg.png') no-repeat;  
    // background-position-x: 100%;
    // background-size:100% auto;
    
    display: flex;
    align-items: center;
    justify-content: center;

    .login-box{
        width: 1428px;
        height: 750px;
        background-color: rgba(255,255,255,0.9);
        border-radius: 10px;
        box-shadow: 0 0 15px #4780ff;
        display: flex;
        // margin-top: -100px;
        overflow: hidden;
        .left{
            width:70%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            padding: 40px;
            padding-top: 150px;
            background-color: #e6e8fc;
            .header{
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 2px;
                text-indent: 2px;
                margin-bottom: 40px;

            }
            .el-row{
                margin-bottom: 20px;
            }
        }
    }
}
</style>