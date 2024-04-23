<script setup lang="ts">
import { useOpp } from "@/hooks";

const [ state, opposite, recover, reverse ] = useOpp([true, false]);
</script>

<template>
  <div>状态: {{ state }}</div>
  <div>
    <button @click="opposite">反转</button>
    <button @click="recover">恢复</button>
    <button @click="reverse">取反</button>
  </div>
</template>
