export const useMobileNav = (enabled: boolean = true) => {
  return useState("mobile_nav", () => enabled);
};
