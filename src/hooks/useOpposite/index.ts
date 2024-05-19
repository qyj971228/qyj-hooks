import { computed, ref, type ComputedRef } from "vue";

type UseOppReturnType<T, K> = [
  T extends unknown ? ComputedRef<boolean> : ComputedRef<boolean | T | K>,
  () => void,
  () => void,
  () => void
];

export function useOpp<T, K>(status?: [T, K]): UseOppReturnType<T, K> {
  const DEFAULT = false;
  const OPPOSITE = true;
  const state = ref(DEFAULT);

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
    if (status) {
      return state.value === DEFAULT ? status[0] : status[1]
    }
    return state.value
  });

  return [resultState as any, recover, reverse, opposite] as any;
}
