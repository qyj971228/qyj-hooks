import { onBeforeUnmount, onMounted, ref } from "vue";

export function useInterval(
  callback: Function,
  delay: number,
  immediate: boolean = false
) {
  const interval = ref();
  const timeout = ref();

  function clear() {
    if (interval.value) {
      clearInterval(interval.value);
      interval.value = null;
    }
    if (timeout.value) {
      clearTimeout(timeout.value);
      timeout.value = null;
    }
  }

  function set(_immediate?: boolean) {
    if (immediate || _immediate) {
      callback();
      interval.value = setInterval(callback, delay);
    } else {
      // 首次延迟执行回调
      timeout.value = setTimeout(() => {
        callback();
        interval.value = setInterval(callback, delay);
      }, delay);
    }
  }

  onMounted(() => {
    set();
  });

  onBeforeUnmount(() => {
    clear();
  });

  return {
    clear,
    reset: set,
  };
}
