<template>
<button :class="['button', color]"><slot>Главная страница</slot></button>
</template>
<script setup lang="ts">
const { color = 'primary' } = defineProps<{ color?: 'primary' | 'ghost' }>()
</script>

<style scoped lang="sass">

.button
  border-radius: 4px
  border: 1px solid var(--color-black)
  font-family: var(--font)
  font-size: 16px
  font-weight: 700
  cursor: pointer
  padding: 16px
.primary
  background: var(--color-black)
  color: var(--color-white-light)

.primary:hover
  background-color: var(--color-black-hover)


.ghost
  background-color: var(--color-white-light)
  color: var(--color-black)

.ghost:hover
  background: var(--color-black)
  color: var(--color-white)
</style>
