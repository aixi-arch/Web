import {defineStore} from 'pinia'

export const userData = defineStore('user',{
    state(){
        return{
            name:"",
            role:""
        }
    },
    getters:{

    },
    actions:{
        Login(name:string,role:string){
            this.name = name
            this.role = role
        },
        Logout(){
            this.name = ""
            this.role = ""
        }
    }
})