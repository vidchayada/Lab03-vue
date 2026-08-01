<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types'
import { useMessageStore } from '@/stores/message'

const router = useRouter()
const messageStore = useMessageStore()
const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)
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
