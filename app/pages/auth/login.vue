<template>
    <div>
        Вход
        <Button @click="login"> Войти</Button>
    </div>
</template>
<script setup lang="ts">

const login = () => {
    localStorage.setItem('access','access')
    navigateTo('/')
}

</script>
<style lang="">
    
</style>