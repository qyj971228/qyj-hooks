import { onBeforeUnmount, onMounted, ref } from "vue";

export function useDarkThemeListener() {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

  const isDarkMode = ref<boolean>(mediaQueryList.matches);

  function handler(event: MediaQueryListEvent) {
    isDarkMode.value = event.matches;
  }

  onMounted(() => {
    mediaQueryList.addEventListener("change", handler);
  });

  onBeforeUnmount(() => {
    mediaQueryList.removeEventListener("change", handler);
  });

  return {
    isDarkMode,
  };
}
