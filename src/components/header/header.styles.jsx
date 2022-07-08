import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.125em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1.5em;
  svg {
    padding: 1.5em;
    display: block;
  }
  span {
    display: none;
    padding: 1.5em;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const HeaderSlogan = styled.span`
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #343541;
`;
