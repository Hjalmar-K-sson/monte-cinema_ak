import styled from "styled-components";

export const SubmitButton = styled.button`
  display: block;
  background: ${(props) => props.theme.colors.cherryRed};
  border: none;
  border-radius: ${(props) => props.theme.radiuses.buttonRadius};
  padding: 1.2rem 0;
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.md};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.015em;
  color: ${(props) => props.theme.colors.snowWhite};
  width: 100%;
  &:hover,
  &:focus-visible {
    cursor: pointer;
    background: ${(props) => props.theme.colors.btnHover};
  }
  &:focus,
  &:focus-visible {
    background: ${(props) => props.theme.colors.btnHover};
    border: ${(props) => props.theme.borders.btnFocus};
    outline: none;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  display: block;
  background: transparent;
  border: none;
  border-radius: ${(props) => props.theme.radiuses.buttonRadius};
  padding: 2.2rem 0;
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.md};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.015em;
  color: ${(props) => props.theme.colors.cherryRed};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    border: none;
    outline: none;
  }
  @media (min-width: 1024px) {
    order: -1;
  }
`;

export const HomepageLinkButton = styled(LinkButton)`
  background: ${(props) => props.theme.colors.cherryRed};
  color: ${(props) => props.theme.colors.snowWhite};
  margin-top: 3rem;
  padding: 1.2rem 0;
  width: auto;
  &:hover,
  &:focus-visible {
    cursor: pointer;
    background: ${(props) => props.theme.colors.btnHover};
  }
  &:focus,
  &:focus-visible {
    background: ${(props) => props.theme.colors.btnHover};
    border: ${(props) => props.theme.borders.btnFocus};
    outline: none;
  }
`;
