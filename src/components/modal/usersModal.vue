<script setup lang="ts">
    defineProps<{
      modelValue: boolean
    }>()

    const emit = defineEmits(['update:modelValue'])

    function close() {
      emit('update:modelValue', false)
    }
</script>

<template>
    <div v-if="modelValue" class="modal fade show d-block">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="fw-semibold">新增用户</span>
                    <button class="btn-close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <label class="form-label">用户名称</label>
                    <input class="form-control" type="text" name="" id="">
                    <label class="form-label">用户密码</label>
                    <input class="form-control" type="password" name="" id="">
                    <label class="form-label">用户类型</label>
                    <select class="form-select" name="" id="">
                        <option value="">管理员</option>
                        <option value="">操作员</option>
                        <option value="">用户</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" @click="close">确认</button>
                    <button class="btn btn-secondary btn-sm" @click="close">关闭</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="modelValue" class="modal-backdrop fade show"></div>
</template>

<style scoped>

</style>

