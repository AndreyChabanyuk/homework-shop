<template>
    <div class="main">
      <div class="main__container">
       Главная 
       <nuxt-link to="/posts/create">Создать пост</nuxt-link>
       </div>
       <Posts />
    </div>
    
</template>
<script>

</script>
<style lang="sass">
  .main
     max-width: 1400px
     margin: 0 auto
  .main__container
    display: flex
    justify-content: space-between
    margin-bottom: 40px
</style>