<script setup lang="ts">
import { useFetching } from "@/hooks";
import { ref, watch } from "vue";

const count = ref(0);
const clickCount = ref(0);

const res = ref();
const error = ref();

const { isFetching, loader } = useFetching(
  async () => {
    res.value = await fetchData();
  },
  (e) => {
    if (e) {
      error.value = e.message;
    }
  }
);

// 手动处理错误
// const { isFetching, loader } = useFetching(async () => {
//   try {
//     res.value = await fetchData();
//   } catch (e) {
//     error.value = e;
//   }
// });

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
  <div>状态: {{ isFetching ? "请求中" : "未在请求中" }}</div>
  <div>请求成功结果: {{ res }}</div>
  <div>请求失败结果: {{ error }}</div>
  <div>请求次数: {{ count }}</div>
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
