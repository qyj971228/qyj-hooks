import { onBeforeUnmount, onMounted } from "vue";

export function useWindowEventListener(event: string, callback: Function) {
  onMounted(() => {
    add();
  });
  onBeforeUnmount(() => {
    clear();
  });
  function add() {
    window.addEventListener(event, (e) => {
      callback(e);
    });
  }
  function clear() {
    window.removeEventListener(event, (e) => {
      callback(e);
    });
  }
}
