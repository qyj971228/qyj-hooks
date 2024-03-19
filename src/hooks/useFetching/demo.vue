<script setup lang="ts">
import { useFetching } from "@/hooks";
import { ref } from "vue";

const count = ref(0);
const clickCount = ref(0);

const { isFetching, loader } = useFetching(
  async () => {
    const res = await fetchData();
    console.log(res);
  }
);
function fetchData() {
  return new Promise((resolve, reject) => {
    count.value += 1;
    setTimeout(() => {
      resolve("data from serve");
    }, 1000);
  });
}
</script>

<template>
  <div>状态: {{ isFetching ? '请求中' : "未在请求中" }}</div>
  <div>请求次数: {{ count }}</div>
  <div>点击触发次数: {{ clickCount }}</div>
  <button @click="() => {
    loader()
    clickCount++
  }">发送请求</button>
</template>
