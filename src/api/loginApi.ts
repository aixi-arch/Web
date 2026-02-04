import request from "@/axios/axios";

export function loginApi(data:{
    name:string
    password:string
}){
    return request.post('/auth/login',data)
}

export function getUsers(){
    return request.get('/auth/getUsers')
}