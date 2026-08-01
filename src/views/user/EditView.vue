<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const router = useRouter()
const props = defineProps<{ user: User }>()

const updateUser = () => {}
</script>

<template>
  <div v-if="user">
    <h2>Edit {{ user.name }}</h2>
    <button @click="updateUser">Update</button>
  </div>
</template>
