import { useOpposite } from "@/hooks/useOpposite";

export function useFetching() {
  const {
    state: fetching,
    recover: endFetch,
    reverse: startFetch,
  } = useOpposite();

  async function fetchHelper(asyncCallback: Function) {
    if (fetching.value) return;
    startFetch();
    await asyncCallback();
    endFetch();
  }

  return {
    fetching,
    fetchHelper,
  };
}
