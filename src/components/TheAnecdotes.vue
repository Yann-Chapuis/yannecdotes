<script setup lang="ts">
import ReloadIcon from '@/components/icons/IconReload.vue'
import { anecdoteGenerator } from '@/services/anecdote.service.js'
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
  <a
    class="absolute bottom-0 right-0 h-6 w-6"
    href="https://github.com/Yann-Chapuis/yannecdotes"
    target="_blank"
  >
    <img src="@/assets/logo-128x128.png" />
  </a>
</template>

<style></style>
