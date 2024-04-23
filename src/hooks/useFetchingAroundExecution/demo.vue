<script setup lang="ts">
import { useArdExec } from "@/hooks";
import { ref } from "vue";

const count = ref(0);
const countBefore = ref(0);
const countAfter = ref(0);
const clickCount = ref(0);
const val = ref("未请求");

const error = ref();
const res = ref();

const [loader, isLoading] = useArdExec(
  async () => {
    try {
      res.value = await fetchData();
    } catch (e) {
      error.value = (e as Error).message;
    }
  },
  () => {
    countBefore.value++;
  },
  () => {
    countAfter.value++;
  }
);

function fetchData() {
  return new Promise((resolve, reject) => {
    count.value += 1;
    setTimeout(() => {
      if (count.value % 2 === 1) {
        resolve("data from serve");
      } else {
        reject("data error");
      }
    }, 1000);
  });
}
</script>

<template>
  <div>状态: {{ isLoading ? "loading" : "loaded" }}</div>
  <div>请求成功结果: {{ res }}</div>
  <div>请求失败结果: {{ error }}</div>
  <div>请求次数: {{ count }}</div>
  <div>前置函数执行次数: {{ countBefore }}</div>
  <div>后置函数执行次数: {{ countAfter }}</div>
  <div>点击触发次数: {{ clickCount }}</div>
  <button
    @click="
      () => {
        loader();
        clickCount++;
      }
    "
  >
    发送请求
  </button>
</template>
