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
    return state.value === DEFAULT
      ? status
        ? status[0]
        : DEFAULT
      : status
      ? status[1]
      : OPPOSITE;
  });

  return [resultState as any, recover, reverse, opposite] as any;
}
