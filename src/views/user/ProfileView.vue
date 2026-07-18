<script setup lang="ts">
import { toRefs } from 'vue'
import { type User } from '@/types'

const props = defineProps<{
  user: User
}>()
const { user } = toRefs(props)
</script>

<template>
  <div>
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
