<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { type User } from '@/types'
import UserCard from '@/components/UserCard.vue'
import UserService from '@/services/UserService'

const PER_PAGE = 4

const allUsers = ref<User[]>([])
const totalUsers = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalUsers.value / PER_PAGE)
  return page.value < totalPages
})

const props = defineProps({
  page: { type: Number, required: true },
})
const page = computed(() => props.page)

const users = computed(() => {
  const start = (page.value - 1) * PER_PAGE
  const end = start + PER_PAGE
  return allUsers.value.slice(start, end)
})

onMounted(() => {
  UserService.getUsers()
    .then((response) => {
      allUsers.value = response.data
      totalUsers.value = response.data.length
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

  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'user-list-view', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >&#60; Prev Page</RouterLink
    >

    <RouterLink
      id="page-next"
      :to="{ name: 'user-list-view', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page &#62;</RouterLink
    >
  </div>
</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
