import { computed, ref } from 'vue';

export function useOpposite<T, K>(status: [T, K]) {

  const DEFAULT = 0
  const OPPOSITE = 1

  const state = ref(DEFAULT)

  function opposite() {
    state.value = state.value === DEFAULT ? OPPOSITE : DEFAULT;
  }

  function recover() {
    state.value = DEFAULT;
  }

  function reverse() {
    state.value = OPPOSITE;
  }

  const resultState = computed(() => {
    return state.value === DEFAULT ? status[0] : status[1]
  })

  return { state: resultState, opposite, recover, reverse };
}
