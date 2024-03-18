import { watch } from "vue";
import { useOpposite } from "@/hooks";

export function useAroundExecution(
  asyncCallback: () => Promise<void>,
  before: () => void,
  after: () => void
) {
  const { state, recover: endFetch, reverse: startFetch } = useOpposite();

  watch(state, (val) => {
    if (val) {
      before();
    } else {
      after();
    }
  });

  async function loader() {
    if (state.value) return;
    startFetch();
    try {
      await asyncCallback();
    } finally {
      endFetch();
    }
  }

  return {
    loader,
  };
}
