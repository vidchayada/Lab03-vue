<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type User } from '@/types'
import UserCard from '@/components/UserCard.vue'
import UserService from '@/services/UserService'

const users = ref<User[]>([])

onMounted(() => {
  UserService.getUsers()
    .then((response) => {
      users.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Users</h1>
  <div class="users">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>
