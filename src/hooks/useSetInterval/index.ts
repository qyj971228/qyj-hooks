import { ref } from "vue";

export function useSetInterval(callback: Function, delay: number) {
  const timeout = ref();

  set();

  function clear() {
    timeout.value && clearInterval(timeout.value);
  }

  function set() {
    timeout.value = setInterval(() => callback(), delay);
  }

  return {
    clear,
    reset: set,
  };
}
