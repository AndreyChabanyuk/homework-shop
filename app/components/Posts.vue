<template>
    <div v-if="posts?.length" class="posts">
        <h1>Посты</h1>
             <CardPost v-for="post in posts"  :key="post.id" :post="post"/>
    </div>
</template>
<script lang="ts" setup>
import type { Post } from '~/interfaces/posts.interface';

defineProps<{
    posts: Post[]
}>()
</script>
<style lang="sass">
.posts
    display: flex
    justify-content: center
    flex-direction: column
    gap: 40px
</style>