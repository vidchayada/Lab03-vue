<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { type Post } from '@/types'
import { apiClient } from '@/services/UserService'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { user } = storeToRefs(store)

const posts = ref<Post[]>([])

watchEffect(() => {
  if (!user.value) return
  apiClient
    .get('/posts?userId=' + user.value.id)
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div>
    <h3>Posts</h3>
    <div v-for="post in posts" :key="post.id" class="post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post {
  margin-bottom: 16px;
  text-align: left;
  border-bottom: 1px solid #444;
  padding-bottom: 12px;
}
</style>
