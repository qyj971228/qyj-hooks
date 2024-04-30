import { useOpp } from "@/hooks";
import { type ComputedRef } from "vue";

export function useArdExec(
  asyncCallback: () => Promise<void>,
  before?: () => void,
  after?: () => void
): [() => Promise<void>, ComputedRef<boolean>] {
  const [state, endFetch, startFetch] = useOpp();

  async function loader() {
    try {
      if (state.value) return;
      before && before();
      startFetch();
      await asyncCallback();
    } finally {
      endFetch();
      after && after();
    }
  }

  return [loader, state];
}
