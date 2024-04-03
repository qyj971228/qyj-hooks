import { inject, provide, readonly, ref } from "vue";

export default function useFunctionPassing<T>(getKey: Symbol, initKey: Symbol) {
  type SetPassingFunctoin = (func: T) => void;

  function provider() {
    const passingFunction = ref<T>();
    provide(getKey, readonly(passingFunction));

    function set(func: T) {
      passingFunction.value = func;
    }
    provide(initKey, set);
  }

  function get() {
    return inject<T>(getKey);
  }

  function init(func: T) {
    const set = inject<SetPassingFunctoin>(initKey);
    set && set(func);
  }
  return { provider, init, get };
}
