<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router'
    import { userData } from '@/stores/global'

    const userStore = userData()
    const router = useRouter()
    const route = useRoute()
    let time = ref("")
    let end:number

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('token_endTime')
        router.replace({name:'login'})
        userStore.Logout()
    }
    
    function navigate(name:string){
        router.replace({name})
    }

    onMounted(() =>{
        end = window.setInterval(() =>{
	        time.value = new Date().toLocaleString()
        },1000)
    })

    onUnmounted(() =>{
        clearInterval(end)
    })

</script>

<template>
    <div class="d-flex flex-column vh-100 bg-light">
        <header class=" border-bottom px-3 d-flex align-items-center justify-content-between py-2">
            <img src="@/assets/FinernLogo.png" alt="" class="img-fluid">
            <!-- <img src="@/assets/FINERN_logo_white.png" alt="" class="img-fluid w-10"> -->
            <!-- <img src="@/assets/FinernLogo1.png" alt="" class="img-fluid w-10"> -->
            <span class="d-flex">
                <div class="d-flex align-items-center me-5">
                    <i :class="['text-secondary fa-2x',{'fa fa-user-secret': userStore.role == '管理员','fa fa-user-md': userStore.role == '操作员','fa fa-user': userStore.role == '用户'}]"></i>
                    <samp class="text-end ms-3 text-size">
                        <div class="fw-bold text-primary-emphasis">{{ userStore.name }}</div>
                        <div class="text-muted small">{{ userStore.role }}</div>
                    </samp>
                </div>
                <div class="text-secondary text-size  d-flex align-items-center" @click="logout">
                    <i class="fa fa-sign-out me-2"></i>退出登录
                </div>
            </span>
        </header>
        
        <div class="d-flex flex-grow-1 ">
            <aside class="d-flex flex-column justify-content-between border-end bg-secondary-subtle flex-shrink-0" style="width: 200px;">
                <!-- <div class="d-flex align-items-center justify-content-between p-3 bg-light border-3">
                    <i :class="['text-secondary fa-2x',{'fa fa-user-secret': userStore.role == '管理员','fa fa-user-md': userStore.role == '操作员','fa fa-user': userStore.role == '用户'}]"></i>
                    <samp class="text-end ms-3">
                        <div class="fw-bold text-primary-emphasis">{{ userStore.name }}</div>
                        <div class="text-muted small">{{ userStore.role }}</div>
                    </samp>
                </div> -->
                <ul class="list-unstyled mt-3 mb-0">
                    <li :class="['menu-item',{active: route.name == 'dashboard'}]" @click="navigate('dashboard')">
                        <i class="fa fa-dashboard me-2"></i>
                        &nbsp;首页
                    </li>
                    <li :class="['menu-item',{active: route.name == 'order'}]" @click="navigate('order')">
                        <i class="fa fa-cart-plus me-2"></i>
                        &nbsp;订单管理
                    </li>
                    <li :class="['menu-item',{active: route.name == 'data'}]" @click="navigate('data')">
                        <i class="fa fa-bar-chart me-2"></i>
                        &nbsp;数据查询
                    </li>
                    <li :class="['menu-item',{active: route.name == 'users'}]" @click="navigate('users')">
                        <i class="fa fa-users me-2"></i>
                        &nbsp;用户管理
                    </li>
                </ul>
                <div class="text-secondary text-size fw-semibold text-center my-2">
                    {{time}}
                </div>
                
            </aside>
            <main class="flex-grow-1 p-3">
                <RouterView/>
            </main>
        </div>
    </div>
</template>


<style scoped>
.menu-item {
    padding: 15px;
    padding-left: 30px;
    cursor: pointer;
    color: #212529;
    font-size: 13px;
}
.menu-item:hover {
    background-color: #f1f3f5eb;
}
.menu-item.active {
    color: #0d6efd;
    background-color: #e7f1ff;
    border-right: 3px solid #0d6efd;
}

</style>