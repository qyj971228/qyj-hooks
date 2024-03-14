import { onBeforeUnmount, onMounted } from 'vue'

export function useWindowEventListener(event: string, callback: Function) {
  onMounted(() => {
    add()
  })
  onBeforeUnmount(() => {
    clear()
  })
  function add() {
    window.addEventListener(event, () => {
      callback()
    })
  }
  function clear() {
    window.removeEventListener(event, () => {
      callback()
    })
  }
  return [add, clear]
}
