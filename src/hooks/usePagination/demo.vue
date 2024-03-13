<script setup lang="ts">
import { ref } from "vue";
import { list as data } from "@/data";
import { usePagination } from "@/hooks";

const {
  list,
  pageNum,
  pageSize,
  totalNum,
  totalPage,
  changeSize,
  changePage,
  next,
  pre,
} = usePagination<{ id: number }>(data);

const input1 = ref();
const input2 = ref();
</script>

<template>
  <div>
    <span>当前页{{ pageNum }} | </span>
    <span>分页大小{{ pageSize }} | </span>
    <span>数据总数{{ totalNum }} | </span>
    <span>分页总数{{ totalPage }}</span>
  </div>
  <div>
    <button @click="next">下一页</button>
    <button @click="pre">上一页</button>
  </div>
  <div>
    <input v-model="input1" type="number" />
    <button @click="changeSize(input1)">设置分页大小</button>
    <input v-model="input2" type="number" />
    <button @click="changePage(input2)">页面跳转</button>
  </div>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>
