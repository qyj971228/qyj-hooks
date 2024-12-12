import { computed, ref } from "vue";

const DEFAULT_PAGE_SIZE = 10;

const DEFAULT_PAGE_NUM = 1;

export function usePagination<T>(
  initData: Array<T>,
  initPageSize: number = DEFAULT_PAGE_SIZE,
  initPageNum: number = DEFAULT_PAGE_NUM
) {
  const data = ref(initData);

  const pageSize = ref(initPageSize);

  const pageNum = ref(initPageNum);

  const list = computed(() => {
    return data.value.slice(
      (pageNum.value - 1) * pageSize.value,
      pageNum.value * pageSize.value
    );
  });

  const totalNum = computed(() => data.value.length);

  const totalPage = computed(() => Math.ceil(totalNum.value / pageSize.value));

  function changePage(page: number) {
    if ([undefined, null, false, "", isNaN].includes(page as any)) {
      pageNum.value = DEFAULT_PAGE_NUM;
      return;
    }
    if (page < DEFAULT_PAGE_NUM) page = DEFAULT_PAGE_NUM;
    if (page > totalPage.value) page = totalPage.value;
    pageNum.value = Math.floor(page) === 0 ? 1 : Math.floor(page);
  }

  function changeSize(size: number) {
    if ([undefined, null, false, "", isNaN].includes(size as any)) {
      pageSize.value = DEFAULT_PAGE_SIZE;
      return;
    }
    if (size <= 1) size = DEFAULT_PAGE_SIZE;
    pageSize.value = Math.floor(size);
  }

  function next() {
    changePage(pageNum.value + 1);
  }

  function pre() {
    changePage(pageNum.value - 1);
  }

  return {
    list,
    pageSize,
    pageNum,
    totalNum,
    totalPage,
    changeSize,
    changePage,
    next,
    pre,
  };
}
