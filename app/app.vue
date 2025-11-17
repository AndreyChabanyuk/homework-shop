<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
import '~/assets/styles/main.css'

onMounted(() => {
	const access = ref(localStorage.getItem('access'))
	console.log(access)
	if (access.value === null) {
		navigateTo('/auth/login')
		
	}
})
</script>


<style scoped lang="sass">
.page-enter-active, .page-leave-active
  transition: all .4s ease

.page-enter-from, .page-leave-to
  opacity: 0
  filter: blur(10px)
</style>
