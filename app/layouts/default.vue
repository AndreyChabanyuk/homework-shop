<template>
    <div class="layout-default">
        <LayoutHeader/>
        <main class="layout-main">
            <slot />
        </main>
        <LayoutFooter/>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="sass">
.layout-default
    display: flex
    flex-direction: column
    height: 100vh
    

.layout-main
    flex: 1   



</style>