import { ref } from "vue";

export function useOpposite(status: [any, any] = [false, true]) {
  const [defaultVal, oppsiteVal] = status;

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
