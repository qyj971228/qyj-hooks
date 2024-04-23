import { useOpp } from "@/hooks";
import { watch, type ComputedRef } from "vue";

export function useArdExec(
  asyncCallback: () => Promise<void>,
  before?: () => void,
  after?: () => void
): [() => Promise<void>, ComputedRef<boolean>] {
  const [isFetching, endFetch, startFetch] = useOpp();

  watch(isFetching, (val) => {
    if (val) {
      before && before();
    } else {
      after && after();
    }
  });

  async function loader() {
    if (isFetching.value) return;
    startFetch();
    try {
      await asyncCallback();
    } finally {
      endFetch();
    }
  }

  return [loader, isFetching];
}
