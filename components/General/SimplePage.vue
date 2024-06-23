<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div class="border-b-2 border-primary">
      <h1 class="text-4xl font-bold text-primary py-8 px-16">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {default: "" as string}
  },
}
</script>

<style scoped></style>
