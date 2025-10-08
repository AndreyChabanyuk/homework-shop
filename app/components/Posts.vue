<template>
    <div class="posts">
        Посты
        <nuxt-link to="/posts/1">К посту</nuxt-link>
    </div>
</template>
<script lang="ts" setup>
const route = useRoute()
</script>
<style lang="sass">
.posts
    display: flex
    justify-content: center
    gap: 40px
</style>