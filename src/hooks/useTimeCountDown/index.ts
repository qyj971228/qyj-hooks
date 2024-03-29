import moment from "moment";
import { ref } from "vue";
import { useInterval } from "../useInterval";

const defaultTargetDate = "2099-12-31 23:59:59";

export function useTimeCountDown(target: string = defaultTargetDate) {
  const years = ref(0);
  const months = ref(0);
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);

  function updateTimeLeft() {
    const targetDate = moment(target);
    const now = moment();
    const diff = targetDate.diff(now);
    const duration = moment.duration(diff);

    years.value = duration.years();
    months.value = duration.months();
    days.value = duration.days();
    hours.value = duration.hours();
    minutes.value = duration.minutes();
    seconds.value = duration.seconds();
  }

  updateTimeLeft();

  useInterval(() => updateTimeLeft(), 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}
