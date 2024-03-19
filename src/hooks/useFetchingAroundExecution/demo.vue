<script setup lang="ts">
import { useFetchingAroundExecution } from "@/hooks";
import { ref } from "vue";

const count = ref(0);
const val = ref("未请求");

const { loader } = useFetchingAroundExecution(
  async () => {
    const res = await fetchData();
    console.log(res);
  },
  () => {
    console.log('before')
    val.value = "请求中";
  },
  () => {
    console.log('after')
    val.value = "请求完毕";
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
  <div>状态: {{ val }}</div>
  <div>请求次数: {{ count }}</div>
  <button @click="loader">发送请求</button>
</template>
