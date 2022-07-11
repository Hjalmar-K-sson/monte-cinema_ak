import styled from "styled-components";

import { Field } from "formik";

export const FormLabel = styled.label`
  position: relative;
  display: block;
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.xl};
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 18px;
  text-transform: uppercase;
  padding: 1.5rem 0.75rem 0.75rem 0;
  color: ${(props) => props.theme.colors.bittersweetRed};
  width: 100%;
  z-index: 1;
  svg {
    position: absolute;
    top: 53%;
    right: 10%;
    z-index: 2;
    @media (min-width: 768px) {
      right: 5%;
    }
    @media (min-width: 1024px) {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const FormInput = styled(Field)`
  display: block;
  align-self: flex-start;
  background: ${(props) => props.theme.colors.athensGray};
  border: none;
  border-radius: ${(props) => props.theme.radiuses.inputRadius};
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.sm};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 21px;
  padding: 1.5rem 1.1rem;
  margin-top: 0.75rem;
  color: ${(props) => props.theme.colors.grayJumbo};
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.colors.inputHover};
  }
  :invalid:focus {
    border: ${(props) => props.theme.borders.inputInvalid};
  }
  &:focus,
  &:focus-visible {
    background: ${(props) => props.theme.colors.inputActiveBg};
    border: ${(props) => props.theme.borders.inputActive};
    outline: none;
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
`;

export const CustomCheckbox = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  height: 21px;
  width: 21px;
  border: ${(props) => props.theme.borders.checkbox};
  border-radius: ${(props) => props.theme.radiuses.inputRadius};
  background: ${(props) => props.theme.colors.snowWhite};
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const CheckboxLabel = styled.label`
  align-self: flex-start;
  display: block;
  position: relative;
  padding-left: 2rem;
  margin: 1.6rem 0;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.grayCharade};
  line-height: 21px;
  user-select: none;
  a {
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.grayCharade};
    @media (min-width: 1024px) {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &:hover ${HiddenCheckbox} ~ ${CustomCheckbox} {
    background: ${(props) => props.theme.colors.inputHover};
  }
  ${HiddenCheckbox}:checked ~ ${CustomCheckbox} {
    background: ${(props) => props.theme.colors.successGreen};
  }
  ${HiddenCheckbox}:checked ~ ${CustomCheckbox}::after {
    display: block;
  }
  ${CustomCheckbox}::after {
    left: 30%;
    top: 10%;
    width: 5px;
    height: 10px;
    border: ${(props) => props.theme.borders.checkedSymbol};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const Suggestion = styled.p`
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.sm};
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 170%;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.grayTuna};
`;

export const SuggestionError = styled(Suggestion)`
  color: ${(props) => props.theme.colors.cherryRed};
`;

export const SuggestionCleared = styled(Suggestion)`
  color: ${(props) => props.theme.colors.successGreen};
`;
