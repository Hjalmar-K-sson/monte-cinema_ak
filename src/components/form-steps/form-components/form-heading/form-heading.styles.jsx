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
  font-family: "Eczar";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 102%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #343541;
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

export const FormSubHeader = styled(FormHeader)`
  color: #85868d;
`;
