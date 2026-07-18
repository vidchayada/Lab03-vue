<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page',
  },
)
</script>

<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
  </div>
</template>
