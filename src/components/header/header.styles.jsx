import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    padding: 3em;
    display: block;
  }
  span {
    display: none;
    padding: 3em;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const HeaderSlogan = styled.span`
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.md};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.grayTuna};
`;
