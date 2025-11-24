<template>
	<section class="post-container">
		<div v-if="post" class="post-container__item">
				<header class="item__top">
					<img
						class="logo-img"
						src="/purple-school.png"
						alt="logo"
						style="width: 30px; height: 30px"
					>
					<p>PurpleSchool</p>
					<p>4 дня назад</p>
					
				</header>
				<main class="item__main">
					<h1 class="h1-title">{{ post.title }}</h1>
					<p>
						{{ post.content }}
					</p>
				</main>
			<footer class="item__footer">
				<div class="footer__likes">
					<span>{{ post.likes }}</span>
					<button
						class="like-button"
						:disabled="voice.liked"
						@click="voice.toggle(post.id, 'like')"
					>
						<img
							width="24"
							height="20"
							src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png"
							alt="facebook-like--v1"
						>
					</button>

					<span>{{ post.dislikes }}</span>
					<button
						:disabled="voice.disliked"
						@click="voice.toggle(post.id, 'dislike')"
					>
						<img
							width="24"
							height="20"
							src="https://img.icons8.com/material-outlined/24/thumbs-down.png"
							alt="thumbs-down"
						>
					</button>
				</div>
			</footer>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { useVoiceStore } from '#imports'
import type { Post } from '~/interfaces/posts.interface'
const route = useRoute()

const voice = useVoiceStore()
const config = useRuntimeConfig()
const { data: post } = await useFetch<Post>(
	config.public.postsurl + `/posts/${route.params.id}`
)
console.log(post)
</script>
<style lang="sass" scoped>

.post-container__item a
   text-decoration: none
   color: black

.post-container
  max-width: 600px
  margin: 0 auto

button
   cursor: pointer

.item__main
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 50px

.post-container__item
    margin: 0 auto
    background: #d3d3d3
    padding: 12px 15px
    border-radius: 10px

.item__top
    display: flex
    gap: 10px
    align-items: center

.item__footer
    display: flex
    justify-content: center
    

.like-button
  margin-right: 30px

.footer__likes
   display: flex
   gap: 5px

.footer__edits
   display: flex
   align-items: center
   gap: 5px
   margin-left: 10px

.logo-img
   border-radius: 15px

.h1-title
   font-size: 25px
</style>
