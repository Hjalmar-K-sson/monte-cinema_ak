import styled from "styled-components";

export const HeaderSlogan = styled.span`
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.md};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.grayTuna};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  svg {
    padding: 3rem;
    display: block;
  }
  ${HeaderSlogan} {
    display: none;
    padding: 3rem;
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
