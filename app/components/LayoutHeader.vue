<template>
	<header class="header">
		<div class="header__logo">Logo</div>
        <div class="header__right">
		<ul class="header__menu">
			<nuxt-link to="/cart" class="menu__link"><a href="">Корзина</a></nuxt-link>
			<nuxt-link to="/favorite" class="menu__link"><a href="">Избранное</a></nuxt-link>
			<nuxt-link to="/user" class="menu__link"><a href="">Профиль</a></nuxt-link>
		</ul>
         <Button @click=logout>Выйти</Button>
         </div>
	</header>
</template>
<script setup lang="ts">
const logout = () => {
    localStorage.removeItem('access')
    navigateTo('/auth/login')
}
</script>
<style lang="sass">
.header
    display: flex
    justify-content: space-between
    margin: 15px
.header__right
    display: flex
    gap: 30px
.header__menu
    display: flex
    gap: 40px
.menu__link
    list-style-type: none
.menu__link a
    text-decoration: none
</style>
