import { useFetching } from "@/hooks";
import { watch } from "vue";

export function useFetchingAroundExecution(
  asyncCallback: () => Promise<void>,
  before: () => void,
  after: () => void
) {
  const { isFetching, loader } = useFetching(async () => await asyncCallback());
  
  watch(isFetching, (val) => {
    if (val) {
      before()
    } else {
      after()
    }
  })

  return {
    loader
  };
}

