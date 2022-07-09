import styled from "styled-components";
import { Form } from "formik";
import { ReactComponent as ToggleVisibilityIcon } from "../../assets/eye.svg";

export const ToggleVisibilityButton = styled(ToggleVisibilityIcon)`
  position: absolute;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 100vw;
  /* height: 100vh; */
  background: #ffffff;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 0 1.5em; */
  @media (min-width: 1024px) {
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
    width: 65%;
  }
  @media (min-width: 1440px) {
    width: 45%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FormLabel = styled.p`
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  padding: 0.5em;
  color: #f47073;
`;

export const FormInput = styled.input`
  height: 1.4em;
  background: #f7f7f7;
  border: none;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  padding: 0.8em;
  color: #85868d;
`;

export const SubmitButton = styled.button`
  display: block;
  padding: 1.2em 7.1em;
  background: #ec1115;
  border-radius: 64px;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.015em;
  color: #ffffff;
`;

export const SuccessParagraph = styled.div`
  padding: 0 1.5em;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #292a33;
`;
