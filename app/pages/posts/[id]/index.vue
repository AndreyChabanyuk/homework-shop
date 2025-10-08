<template>
    <div>
        Пост{{route.params.id}}
        <nuxt-link :to="`/posts/${route.params.id}/edit`">Редактирование поста</nuxt-link>
    </div>
</template>
<script lang="ts" setup>
    const route = useRoute()
</script>
<style lang="">
    
</style>