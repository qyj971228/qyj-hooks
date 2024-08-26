<script setup lang="ts">
import { useWindowEventListener } from "@/hooks";
import { ref } from "vue";

useWindowEventListener("mousemove", onMouseMove);

function onMouseMove(e: Event) {
  x.value = (e as MouseEvent).clientX;
  y.value = (e as MouseEvent).clientY;
}

const x = ref();
const y = ref();
</script>
<template>
  <div>mouse x: {{ x }}</div>
  <div>mouse y: {{ y }}</div>
</template>
