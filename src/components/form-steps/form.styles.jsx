import styled from "styled-components";
import { Form } from "formik";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  background: ${(props) => props.theme.colors.snowWhite};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  @media (min-width: 1024px) {
    box-shadow: ${(props) => props.theme.shadows.formShadow};
    border-radius: ${(props) => props.theme.radiuses.formContRadius};
    width: 37.5rem;
    padding: 4rem;
    margin-bottom: 10rem;
  }
`;

export const SuccessParagraph = styled.div`
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.sm};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 21px;
  color: ${(props) => props.theme.colors.grayCharade};
  text-align: center;
  padding: 0 1.5em;
`;

export const FormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
