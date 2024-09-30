<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import EventService from '@/services/EventService.js'

const props = defineProps({
  id: {
    required: true
  }
})
const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <div id="nav">
      <router-link :to="{ name: 'event-details' }">Details</router-link>
      |
      <router-link :to="{ name: 'event-register' }">Register</router-link>
      |
      <router-link :to="{ name: 'event-edit' }">Edit</router-link>
    </div>

    <router-view :event="event" />
  </div>
</template>
