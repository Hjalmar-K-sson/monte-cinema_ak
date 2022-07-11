import styled from "styled-components";

export const FormHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2.3em 3em 2.3em;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const FormHeader = styled.span`
  display: block;
  font-family: ${(props) => props.theme.fonts.headerFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.lg};
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 102%;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.grayTuna};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const FormSubHeader = styled(FormHeader)`
  color: ${(props) => props.theme.colors.grayJumbo};
`;
