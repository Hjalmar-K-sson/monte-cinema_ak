import styled from "styled-components";

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100% auto;
  padding: 1em;
  position: relative;
`;

export const FormLabel = styled.p`
  align-self: flex-start;
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
  align-self: flex-start;
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
  width: 100%;
`;

// export const Suggestion = styled.p`
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 170%;
//   letter-spacing: 0.04em;
//   color: #343541;
// `;

export const Suggestion = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0.04em;
  color: #ec1115;
`;

// export const SuggestionCleared = styled.p`
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 170%;
//   letter-spacing: 0.04em;
//   color: #27ae60;
// `;
