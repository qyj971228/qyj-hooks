<script setup lang="ts">
import { useFetchingAroundExecution } from "@/hooks";
import { ref } from "vue";

const count = ref(0);
const countBefore = ref(0);
const countAfter = ref(0);
const clickCount = ref(0)
const val = ref("未请求");

const { loader } = useFetchingAroundExecution(
  async () => {
    const res = await fetchData();
    console.log(res);
  },
  () => {
    countBefore.value++
    val.value = "请求中";
  },
  () => {
    countAfter.value++
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
  <div>前置函数执行次数: {{ countBefore }}</div>
  <div>后置函数执行次数: {{ countAfter }}</div>
  <div>点击触发次数: {{ clickCount }}</div>
  <button @click="() => {
    loader()
    clickCount++
  }">发送请求</button>
</template>
