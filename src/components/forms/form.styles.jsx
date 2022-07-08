import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 0.5em;
`;

export const FormHeader = styled.h1`
  font-family: "Eczar";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 102%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #343541;
`;

export const FormSubHeader = styled(FormHeader)`
  color: #85868d;
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
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
