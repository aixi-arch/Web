import { createRouter,createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import order from '@/components/pages/order.vue'
import data from '@/components/pages/data.vue'
import users from '@/components/pages/users.vue'
import dashboard from '@/components/pages/dashboard.vue'


const routes = [
    { path: '/', redirect: "/login"},
    { path: '/login', component: login, name:"login"},
    { path: '/home', component: home, meta:{requiresAuth:true}, children:[
		{path: 'dashboard', component: dashboard, name:"dashboard"},
		{path: 'order', component: order, name:"order"},
		{path: 'data', component: data, name:"data"},
		{path: 'users', component: users, name:"users"},
		{path: '', redirect: {name:'dashboard'}}
	]}
]

const router = createRouter({
  	history: createWebHistory(),
  	routes
})

router.beforeEach((to)=>{
	let endTime = localStorage.getItem('token_endTime')
	let token = localStorage.getItem('token')
	if (token) {
        if (endTime && Number(endTime) < Date.now()) {
            localStorage.removeItem('token')
            localStorage.removeItem('token_endTime')
            alert('登录已过期，请重新登录')
            return { name: 'login' }
        }
    } else if(to.name !== 'login' && !token) {
		alert('未登录，请先登录')
		return {name:'login'}
    }
	if(to.name === 'login' && token){
		return {name:'dashboard'}
	}
})

export default router