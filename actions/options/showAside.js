export const SHOW_ASIDE = "SHOW_ASIDE";

export const showAside = (isAsideActive) => ({
  type: SHOW_ASIDE,
  payload: isAsideActive,
});
