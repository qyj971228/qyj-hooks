<script setup lang="ts">
import { useNumberFlopper } from "@/hooks";

const { num: n1, change: c1 } = useNumberFlopper("100");
const { num: n2, change: c2 } = useNumberFlopper("00");

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function change() {
  c1(getRandomInt(0, 10000).toString());
  c2(getRandomInt(0, 100).toString());
}
</script>

<template>
  <span>{{ n1 }}.{{ n2 }}</span>
  <button @click="change">change</button>
</template>
