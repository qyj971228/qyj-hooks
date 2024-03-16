<script setup lang="ts">
import { useSetInterval } from "@/hooks";
import { ref } from "vue";

const count = ref(0);

const { clear, reset } = useSetInterval(() => {
  count.value += 1;
}, 1000);

function next() {
  reset();
}

function resetCount() {
  clear();
  count.value = 0;
}

function restart() {
  clear();
  count.value = 0;
  reset();
}
</script>

<template>
  <div>计数: {{ count }}</div>
  <button @click="clear">暂停</button>
  <button @click="next">继续</button>
  <button @click="resetCount">置0</button>
  <button @click="restart">从0开始</button>
</template>
