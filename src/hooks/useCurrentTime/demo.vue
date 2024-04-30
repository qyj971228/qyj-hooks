<script setup lang="ts">
import { useCurrentTime } from "@/hooks";

const currentTime = useCurrentTime("YYYY-MM-DD HH:mm:ss");
</script>
<template>
  <div>{{ currentTime }}</div>
</template>
