<script setup lang="ts">

</script>

<template>
    <div>
        <h5 class="fw-semibold mb-3">数据查询</h5>
        <hr />
        <div class="card text-size">
		<div class="card-header">
			<i class="fa fa-list-ul me-1"></i>
			订单查询
		</div>
        <div class="card-body col-12 col-lg-6">
            <div class="row">
                <div class="col-md-6">
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">订单编号</label>
                        <div class="col-sm-9">
                            <input class="form-control form-control-sm" type="number"/>
                        </div>
                    </div>
                  
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">创建时间</label>
                        <div class="col-sm-9">
                            <input class="form-control form-control-sm" type="datetime-local"/>
                        </div>
                    </div>
                  
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">启动时间</label>
                        <div class="col-sm-9">
                            <input class="form-control form-control-sm" type="datetime-local"/>
                        </div>
                    </div>
                </div>
              
                <div class="col-md-6">
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">订单类型</label>
                        <div class="col-sm-9">
                            <select class="form-select form-select-sm" name="" id=""></select>
                        </div>
                    </div>
                  
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">订单状态</label>
                        <div class="col-sm-9">
                            <input class="form-control form-control-sm" type="text"/>
                        </div>
                    </div>
                  
                    <div class="row mb-2">
                        <label class="col-sm-3 col-form-label">结束时间</label>
                        <div class="col-sm-9">
                            <input class="form-control form-control-sm" type="datetime-local"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-1">
              <button class="btn btn-primary btn-sm me-2 text-size "><i class="fa fa-search me-1"></i>查询</button>
              <button class="btn btn-success btn-sm text-size"><i class="fa fa-file-excel-o me-1"></i>导出</button>
            </div>
        </div>

		</div>
		<div class="mt-3 card text-size">
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
    </div>
</template>

<style scoped>

</style>
