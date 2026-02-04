<script setup lang="ts">
    import { ref } from 'vue'
    import OrderModal from '@/components/modal/orderModal.vue'
    const showModal = ref(false)

</script>

<template>
    <div>
        <h5 class="fw-semibold mb-3">订单管理</h5>
        <hr />
        <button class="btn btn-primary my-3 text-size" @click="showModal = true"><i class="fa fa-plus me-2"></i>新增订单</button>
        <div class="card text-size " >
            <div class="card-header">
            	<i class="fa fa-list-ul me-1"></i>
            	订单列表
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="position-sticky top-0">
                        <tr>
                            <th>订单编号</th>
                            <th>订单类型</th>
                            <th>订单名称</th>
                            <th>创建时间</th>
                            <th>订单数量</th>
                            <th>描述</th>
                            <th>订单状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <OrderModal v-model="showModal" />

    </div>


</template>

<style scoped>

</style>
