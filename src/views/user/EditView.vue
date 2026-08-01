<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const messageStore = useMessageStore()
const { user } = storeToRefs(userStore)

const updateUser = () => {
  messageStore.updateMessage('Update is in progress...')
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  router.push({ name: 'home-view' })
}
</script>

<template>
  <div v-if="user">
    <h2>Edit {{ user.name }}</h2>
    <button @click="updateUser">Update</button>
  </div>
</template>
