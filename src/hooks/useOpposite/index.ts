import { ref } from 'vue';

export function useOpposite(status: [boolean, boolean]) {
  const [defaultVal, oppositeVal] = status;

  const state = ref(defaultVal)

  function opposite() {
    state.value = state.value === defaultVal ? oppositeVal : defaultVal;
  }

  function recover() {
    state.value = defaultVal;
  }

  function reverse() {
    state.value = oppositeVal;
  }

  return { state, opposite, recover, reverse };
}
