import { css } from "styled-components";

const sizes = {
  xl: 1440,
  lg: 1024,
  sm: 375,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
