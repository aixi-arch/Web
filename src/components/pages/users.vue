<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import UserModal from '@/components/modal/usersModal.vue'
    import { getUsersInfo } from '@/api/UserApi'
    import { userData } from '@/stores/global'

    const userStore = userData()

    interface user{
        name:string
        password:string
        role:string
    }

    const showModal = ref(false)
    const userArr = ref<user[]>([])

    function get(){
        getUsersInfo().then((res) =>{
            userArr.value = res.data
        })
    }

    onMounted(() =>{
        get()
    })
</script>

<template>
    <div>
        <h5 class="fw-semibold mb-3">用户管理</h5>
        <hr />
        <button class="btn btn-primary my-3 text-size" @click="showModal = true"><i class="fa fa-plus me-2"></i>新增用户</button>
        <div class="card text-size">
            <div class="card-header">
            	<i class="fa fa-list-ul me-1"></i>
            	用户列表
            </div>
            <div class="card-body ">
                <table class="table table-bordered">
                    <thead class="position-sticky top-0">
                        <tr>
                            <th style="width: 40%;">用户名</th>
                            <th style="width: 30%;">密码</th>
                            <th>用户类型</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in userArr">
                            <td>{{ item.name }}</td>
                            <td>
                                <input class="form-control form-control-sm form-control-plaintext form-control-color" :type="userStore.role == '管理员' ? 'text' : 'password'" :value="item.password" readonly>
                            </td>
                            <td>{{ item.role }}</td>
                            <td v-if="item.role != '管理员'">
                                <button type="button" class="btn btn-primary text-size btn-sm me-2"><i class="fa fa-pencil me-2"></i>编辑</button>
								<button type="button" class="btn btn-danger text-size btn-sm"><i class="fa fa-trash-o me-2"></i>删除</button>
                            </td>
                            <td v-else class="text-center">
                                <small class="text-secondary btn btn-sm">不可操作</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <UserModal v-model="showModal" />


    </div>

    
</template>

<style scoped>

</style>
