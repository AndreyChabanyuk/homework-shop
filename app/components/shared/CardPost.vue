<template>
	<section class="post-container">
		<div class="post-container__item">
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
				<h1 class="h1-title">Добавить функцию голосования</h1>
				<p>
					Попробовать добавить в приложение функцию голосования, которая
					позволит определить, какая фича более полезна, а какая нет. После
					добавления поста появляется...
				</p>
			</main>
			<footer class="item__footer">
				<div class="footer__likes">
					<span>{{voice.like}}</span>
                    <button class="like-button" :disabled="voice.liked" @click="voice.toggle('like')">
                        <img width="24" height="20" src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png" alt="facebook-like--v1">
                    </button>
					
					<span>{{voice.dislike}}</span>
					<button :disabled="voice.disliked" @click="voice.toggle('dislike')" >
                        <img width="24" height="20" src="https://img.icons8.com/material-outlined/24/thumbs-down.png" alt="thumbs-down">
                    </button>
				</div>
				<div class="footer__action-post">
					<button><img width="20" height="20" src="https://img.icons8.com/material-two-tone/50/shopping-cart.png" alt="shopping-cart"></button>
					<button class="footer__edits"><img width="15" height="15" src="https://img.icons8.com/material-outlined/50/create-new.png" alt="create-new"><span>Изменить</span></button>
				</div>
			</footer>
		
		</div>
		<nuxt-link :to="`/posts/${route.params.id}/edit`"
			>Редактирование поста</nuxt-link
		>
	</section>
</template>
<script lang="ts" setup>

import { useVoiceStore } from '#imports';

const voice = useVoiceStore()
const route = useRoute()

</script>
<style lang="sass">

button
   cursor: pointer

.post-container__item
    background: #d7d7d7
    max-width: 500px
    padding: 12px 15px
    border-radius: 10px

.item__top
    display: flex
    gap: 10px
    align-items: center

.item__footer
    display: flex
    justify-content: space-between

.footer__action-post
   display: flex
   gap: 5px
   

.footer__likes
   display: flex
   align-items: center
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
