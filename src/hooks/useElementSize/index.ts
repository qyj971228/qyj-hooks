import { onBeforeUnmount, onMounted, ref, watch, type Ref } from "vue";

export function useElementSize(
  domRef: Ref<HTMLElement>,
  callback?: () => void
) {
  const height = ref<number>();
  const width = ref<number>();
  const contentRect = ref<DOMRectReadOnly>();

  const resizeObserver = new ResizeObserver((e: ResizeObserverEntry[]) => {
    height.value = e[0].contentRect.height;
    width.value = e[0].contentRect.width;
    contentRect.value = e[0].contentRect;
    callback && callback();
  });

  watch(domRef, () => {
    if (domRef.value) {
      resizeObserver?.observe(domRef.value);
    } else {
      resizeObserver?.disconnect();
    }
  });

  onMounted(() => {
    domRef.value && resizeObserver?.observe(domRef.value);
  });

  onBeforeUnmount(() => {
    resizeObserver?.disconnect();
  });

  return {
    height,
    width,
    contentRect,
  };
}
