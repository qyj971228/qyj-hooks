export function useRoundExecution(
  asyncCallback: () => Promise<void>,
  before: () => void,
  after: () => void
) {
  async function loader() {
    before();
    try {
      await asyncCallback();
    } finally {
      after();
    }
  }

  return [
    loader,
  ];
}
