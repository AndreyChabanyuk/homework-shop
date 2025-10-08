<template>
  <div>
    <NuxtPage />
  </div>
</template>


<script lang="ts" setup>
import '~/assets/styles/main.css'


onMounted(() => {
  const access = ref(localStorage.getItem('access'))
  console.log(access)
  if(access.value === null){
    navigateTo('/auth/login')
  }
})

</script>
