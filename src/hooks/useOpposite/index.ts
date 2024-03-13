import { ref } from "vue";

export function useOpposite(arr: [any, any]) {
  const [defaultVal, oppsiteVal] = arr;

  const state = ref(defaultVal);

  function oppsite() {
    state.value = state.value == defaultVal ? oppsiteVal : defaultVal;
  }
  function recover() {
    state.value = defaultVal;
  }
  function reverse() {
    state.value = oppsiteVal;
  }
  return { state, oppsite, recover, reverse };
}
