<script setup lang="ts">
import { useElementSize } from "@/hooks";
import { ref } from "vue";

const domRef = ref();
const { height, width } = useElementSize(domRef, () => {
  console.log("size changed");
});
</script>
<template>
  <textarea ref="domRef"></textarea>
  <div>{{ height }}</div>
  <div>{{ width }}</div>
</template>
