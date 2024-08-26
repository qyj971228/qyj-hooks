import { onBeforeUnmount, watch, type Ref } from "vue";

export function useEventListener(
  domRef: Ref<HTMLElement | null | undefined>,
  event: string,
  callback: Function
) {
  watch(
    domRef,
    () => {
      if (domRef.value) {
        domRef.value.removeEventListener(event, (e) => callback(e));
        domRef.value.addEventListener(event, (e) => callback(e));
      }
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    domRef.value && domRef.value.removeEventListener(event, () => callback);
  });
}
