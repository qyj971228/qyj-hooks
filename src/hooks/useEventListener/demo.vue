<script setup lang="ts">
import { useEventListener } from '@/hooks'
import { ref } from 'vue';

const input = ref<HTMLInputElement>()

useEventListener(input, 'input', onInput)

function onInput(e: Event) {
  value.value = (e.target as HTMLInputElement).value
}

const value = ref()

</script>
<template>
  <input ref="input">
  <div>value: {{ value ? value : '空字符串' }}</div>
</template>