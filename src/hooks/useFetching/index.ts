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
      let error = new Error();
      if (e instanceof Error) {
        error = e
      } else {
        error.message = e as string
        error.name = 'Error'
      }
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
