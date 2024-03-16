<script setup lang="ts">
import { useFetching } from "@/hooks";
import { ref } from "vue";

const count = ref(0);

const { fetching, fetchHelper } = useFetching();
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count.value += 1;
      resolve("data from serve");
    }, 1000);
  });
}
function init() {
  fetchHelper(async () => {
    const res = await fetchData();
  });
}
</script>

<template>
  <div>状态: {{ fetching ? "请求中" : "已获取" }}</div>
  <div>请求次数: {{ count }}</div>
  <button @click="init">发送请求</button>
</template>
