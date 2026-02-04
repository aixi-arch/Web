import request from "@/axios/axios";
export function getUsersInfo(){
    return request.get('/auth/getUsersInfo')
}