<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home-view' }">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
