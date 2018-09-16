<template>
    <div class="row">
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">{{element.name}}</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="text" class="form-control" :aria-label="element.name" v-model="element.amount.weight">
									  <div class="input-group-append">
										<span class="input-group-text">mg</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>	
</template>

<script>
export default {
  name: "ElementEditableRow",
  props: ["element"]
};
</script>

