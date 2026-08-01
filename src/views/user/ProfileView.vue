<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { user } = storeToRefs(store)
</script>

<template>
  <div v-if="user">
    <h3>Contact</h3>
    <p>Phone: {{ user.phone }}</p>
    <p>Email: {{ user.email }}</p>
    <h3>Address</h3>
    <p>{{ user.address.street }}, {{ user.address.suite }}</p>
    <p>{{ user.address.city }} {{ user.address.zipcode }}</p>
    <h3>Company</h3>
    <p>{{ user.company.name }}</p>
  </div>
</template>
