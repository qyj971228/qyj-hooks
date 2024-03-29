import { onBeforeUnmount, onMounted, ref } from "vue";

export function useInterval(callback: Function, delay: number) {
  const timeout = ref();

  function clear() {
    timeout.value && clearInterval(timeout.value);
  }

  function set() {
    timeout.value = setInterval(() => callback(), delay);
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
