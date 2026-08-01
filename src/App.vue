<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
  </div>
  <header>
    <nav>
      <RouterLink :to="{ name: 'user-list-view' }">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@keyframes yellowFade {
  from {
    background-color: rgb(57, 93, 60);
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellowFade 5s ease-in-out;
}
</style>
