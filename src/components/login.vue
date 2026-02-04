<script lang="ts">
    import { getUsers, loginApi } from '@/api/loginApi';
    import{ userData } from '@/stores/global'
    export default{
        data(){
            return{
                user:{
                    name:"",
                    password:"",
                    role:""
                },
                num:0,
                arr:[],
                msg:"",
                password:"",
            }
        },
        methods:{
            up(){
                if(this.num == 0){
                    this.msg = "已到达第一位用户！"
                    return;
                }
                else{
                    this.msg = ""
                    this.num--;
                    this.user = this.arr[this.num]!;
                }
            },
            next(){
                if (this.num == this.arr.length - 1) {
                    this.msg = "已到达最后一位用户！"
                    return;
                }
                else{
                    this.msg = ""
                    this.num++;
                    this.user = this.arr[this.num]!;
                }
            },
            login(){
                if(!this.password){
                    this.msg = "请输入用户密码！"
                    return;
                }
                loginApi({
                    name: this.user.name,
                    password: this.password
                })
                .then(res => {
                    const { name, role, token } = res.data
                    let time = 10
                    let endTime = Date.now() + time * 60 * 1000
                    localStorage.setItem('token', token)
                    localStorage.setItem('token_endTime', endTime.toString())
                    const userStore = userData()
                    userStore.Login(name, role)
                    this.$router.replace({ name: "dashboard" })
                })
                .catch(err => {
                    this.msg = "密码错误!"
                    localStorage.removeItem('token')
                })
            },
            refresh() {
                window.location.reload();
            },
            get(){
                getUsers().then(res =>{
                    this.arr = res.data
                    this.user = this.arr[0]!
                })
            }
        },
        created(){
            this.get()
        }
    }
</script>

<template>

    <div class="login_bg d-flex justify-content-center align-items-center">
        <div class="card shadow">
            <div class="card-body p-3">
                <h5 class="text-center mb-3">系统登录</h5>
                    <div class="d-flex align-items-center justify-content-center gap-4">
                        <i class="bi bi-chevron-left text-dark fs-4" @click="up"></i>
                        <div class="text-center w-50">
                            <div class="mb-1"><i class="bi bi-person fs-1 text-primary"></i></div>
                            <div class="fw-bold text-primary">{{ user.name }}</div>
                            <small class="text-muted">{{ user.role }}</small>
                        </div>
                        <i class="bi bi-chevron-right text-dark fs-4" @click="next"></i>
                    </div>
                <h6 class="text-danger text-center my-2">{{ msg }}</h6>
                <div class="my-2">
                    <input type="password" class="form-control border-primary" placeholder="请输入密码" v-model="password"/>
                </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" @click="login">登录</button>
                    <button class="btn btn-secondary" @click="refresh">取消</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="fixed-bottom text-center mb-5 text-light fw-medium text-size">
		&copy; Designed by Finern Technology
	</footer>
    
</template>

<style scoped>
    .login_bg{
        background-color: #0d6efd;
        min-height: 100vh;
    }
</style>
