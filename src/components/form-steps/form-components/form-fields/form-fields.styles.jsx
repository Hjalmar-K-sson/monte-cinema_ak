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
    top: 50%;
    left: 80%;
    z-index: 2;
    @media (min-width: 1024px) {
      left: 85%;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const TextFormInput = styled(Field)`
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
  /* &::placeholder,
  &::-webkit-input-placeholder {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } */
  &:hover {
    background: ${(props) => props.theme.colors.inputHover};
  }
  &:focus,
  &:focus-visible {
    background: ${(props) => props.theme.colors.inputActiveBg};
    border: ${(props) => props.theme.borders.inputActive};
    outline: none;
  }
  &:invalid:focus {
    border: ${(props) => props.theme.borders.inputInvalid};
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
