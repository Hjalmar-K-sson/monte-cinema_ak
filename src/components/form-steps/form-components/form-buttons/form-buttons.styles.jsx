import styled from "styled-components";

export const SubmitButton = styled.button`
  display: block;
  background: ${(props) => props.theme.colors.cherryRed};
  border: none;
  border-radius: ${(props) => props.theme.radiuses.buttonRadius};
  padding: 1rem;
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.015em;
  color: ${(props) => props.theme.colors.snowWhite};
  width: 100%;
  &:hover,
  &:focus-visible {
    cursor: pointer;
    background: #a60c0e;
  }
  &:focus {
    background: #a60c0e;
    border: 5px solid #f47073;
  }
  &:focus-visible {
    border: none;
    outline: none;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  display: block;
  background: transparent;
  border: none;
  border-radius: ${(props) => props.theme.radiuses.buttonRadius};
  padding: 1rem;
  font-family: ${(props) => props.theme.fonts.labelFont};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
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
  width: auto;
  &:hover,
  &:focus-visible {
    cursor: pointer;
    background: #a60c0e;
  }
  &:focus {
    background: #a60c0e;
    border: 5px solid #f47073;
  }
  &:focus-visible {
    border: none;
    outline: none;
  }
`;
