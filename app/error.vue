<template>
	<div class="error__wrapper">
		<div>
			{{ error.statusCode }}
		</div>
		<div>{{ error.statusMessage }}</div>
		<Button color="ghost" @click="goHome">Вернуться на главную страницу</Button>
	</div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
	error: NuxtError
}>()

function goHome() {
	navigateTo('/')
}
</script>
<style lang="sass">
.error__wrapper
	font-size: 30px
	display: flex
	flex-direction: column
	align-items: center
	gap: 20px
	justify-content: center

	
</style>
