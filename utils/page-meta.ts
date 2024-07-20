export const useMobileNav = (value?: boolean) => {
  const val = useState("mobile_nav");

  onMounted(() => {
    val.value = value;
  });

  onBeforeUnmount(() => (val.value = true));

  return val;
};

export const usePageTitle = (value?: string) => {
  const val = useState("page_title");

  onMounted(() => {
    val.value = value;
  });

  onBeforeUnmount(() => (val.value = undefined));

  return val;
};
