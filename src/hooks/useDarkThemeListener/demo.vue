<script lang="ts" setup>
import { useDarkThemeListener } from "@/hooks";

const { isDarkMode } = useDarkThemeListener();
</script>
<template>
  <div>当前主题：{{ isDarkMode ? "暗色" : "浅色" }}</div>
</template>
