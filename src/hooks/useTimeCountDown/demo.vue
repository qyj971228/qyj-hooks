<script setup lang="ts">
import { useTimeCountDown } from "@/hooks";

const { years, months, days, hours, minutes, seconds } = useTimeCountDown(
  "2030-01-01 00:00:00"
);
</script>

<template>
  <div>
    距离 2030-01-01 00:00:00 时间:
    {{
      years +
      "年" +
      months +
      "月" +
      days +
      "天" +
      hours +
      "小时" +
      minutes +
      "分钟" +
      seconds +
      "秒"
    }}
  </div>
</template>
