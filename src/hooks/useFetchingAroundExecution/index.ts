import { useFetching } from "@/hooks";
import { ref, watch } from "vue";

export function useFetchingAroundExecution(
  asyncCallback: () => Promise<void>,
  before: () => void,
  after: (e?: Error) => void
) {
  const { isFetching, loader } = useFetching(
    async () => await asyncCallback(),
    (e) => after && after(e)
  );

  watch(isFetching, (val) => {
    if (val) {
      before();
    } else {
      after();
    }
  });

  return {
    loader,
  };
}
