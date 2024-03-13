<script setup lang="ts">
import { useOpposite } from "@/hooks";

const { state, oppsite, recover, reverse } = useOpposite([true, false]);
</script>

<template>
  <div>状态: {{ state }}</div>
  <div>
    <button @click="oppsite">反转</button>
    <button @click="recover">恢复</button>
    <button @click="reverse">取反</button>
  </div>
</template>
