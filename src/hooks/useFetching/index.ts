import { useOpposite } from "@/hooks";

export function useFetching(asyncCallback: () => Promise<void>) {
  const {
    state: isFetching,
    recover: endFetch,
    reverse: startFetch,
  } = useOpposite([false, true]);

  async function loader() {
    if (isFetching.value) return
    startFetch();
    try {
      await asyncCallback();
    } finally {
      endFetch();
    }
  }

  return {
    isFetching,
    loader,
  };
}
