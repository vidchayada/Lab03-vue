<script setup lang="ts">
import { type User } from '@/types'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="user-card">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <p>{{ user.company.name }}</p>
  </div>
</template>

<style scoped>
.user-card {
  padding: 20px;
  margin-bottom: 18px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
