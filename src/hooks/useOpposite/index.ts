import { ref, computed, type ComputedRef } from "vue";

// 重载签名
type UseOppReturnType<T> = [ComputedRef<T>, () => void, () => void, () => void];

export function useOpp<T, K>(status: [T, K]): UseOppReturnType<T | K>;
export function useOpp(): UseOppReturnType<boolean>;

// 实现签名
export function useOpp<T, K>(
  status?: [T, K]
): UseOppReturnType<boolean | T | K> {
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
      return state.value === DEFAULT ? status[0] : status[1];
    } else {
      return state.value;
    }
  });

  return [resultState, recover, reverse, opposite];
}

// useOpp()[0]
// useOpp([Symbol, new Date()])[0]
