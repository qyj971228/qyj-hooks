import { ref } from "vue";

export function useNumberFlopper(init: string) {
  const num = ref<string>(init);

  let interval: number = -1;

  function change(val: string) {
    const length = val.length;
    interval = -1;
    let count = 0;
    interval = setInterval(() => {
      if (count !== 10) {
        let res = "";
        for (let i = 0; i < length; i++) {
          res += Math.floor(Math.random() * 10);
        }
        num.value = res;
        count++;
      } else {
        num.value = val;
        clearInterval(interval);
      }
    }, 10);
  }

  return { num, change };
}
