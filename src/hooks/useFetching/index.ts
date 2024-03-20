import { useOpposite } from "@/hooks";

export function useFetching(
  asyncCallback: () => Promise<void>,
  errorCatchCallback?: (e: Error) => void
) {
  const {
    state: isFetching,
    recover: endFetch,
    reverse: startFetch,
  } = useOpposite([false, true]);

  async function loader() {
    if (isFetching.value) return;
    startFetch();
    try {
      await asyncCallback();
    } catch (e) {
      const error = new Error();
      error.message = e as string;
      if (errorCatchCallback) {
        errorCatchCallback(error);
      } else {
        throw error;
      }
    } finally {
      endFetch();
    }
  }

  return {
    isFetching,
    loader,
  };
}
