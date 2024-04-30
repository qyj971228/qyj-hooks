import moment from "moment";
import { onBeforeUnmount, ref } from "vue";

export function useCurrentTime(fmt: string) {
  const currentTime = ref(moment(new Date()).format(fmt));
  const interval = setInterval(() => {
    currentTime.value = moment(new Date()).format(fmt);
  }, 1000);
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
  return currentTime;
}
