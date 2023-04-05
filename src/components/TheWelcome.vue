<script setup lang="ts">
import ReloadIcon from '@/components/icons/IconReload.vue'
import { anecdoteGenerator } from '@/services/anecdoteService'
import { onMounted, ref } from 'vue'

let anecdote = ref('')
let reloadState = ref(false)
onMounted(() => {
  reloadNewAnecdote()
})

async function reloadNewAnecdote() {
  if (reloadState.value) return
  reloadState.value = true
  anecdote.value = await anecdoteGenerator()
  reloadState.value = false
}
</script>

<template>
  <span class="text-center mb-10">{{ anecdote }}</span>
  <ReloadIcon :class="reloadState ? 'rotate' : 'cursor-pointer'" @click="reloadNewAnecdote()" />
</template>

<style></style>
