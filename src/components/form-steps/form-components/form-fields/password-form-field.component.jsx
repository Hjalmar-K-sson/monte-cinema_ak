import { useState } from "react";

import { useField } from "formik";

import { ReactComponent as ToggleVisibilityIcon } from "../../../../assets/eye.svg";

import {
  FormLabel,
  FormInput,
  Suggestion,
  SuggestionError,
  SuggestionCleared,
} from "./form-fields.styles";

const PasswordFormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>
        {label}
        <FormInput
          type={passwordVisible ? "text" : "password"}
          {...field}
          {...props}
        />
        <ToggleVisibilityIcon onClick={togglePasswordVisible} />
      </FormLabel>
      {meta.value === "" && meta.error === undefined ? (
        <Suggestion>At least one letter</Suggestion>
      ) : (meta.value.length >= 1 && meta.error === "At least one letter") ||
        (meta.value.length >= 1 && meta.error === "Please enter a password") ||
        (meta.value.length < 1 && meta.error === "Please enter a password") ? (
        <SuggestionError>At least one letter</SuggestionError>
      ) : (
        <SuggestionCleared>At least one letter</SuggestionCleared>
      )}
      {meta.value === "" && meta.error === undefined ? (
        <Suggestion>At least one digit</Suggestion>
      ) : (meta.value.length >= 1 && meta.error === "At least one digit") ||
        (meta.value.length >= 1 && meta.error === "Please enter a password") ||
        (meta.value.length < 1 && meta.error === "Please enter a password") ? (
        <SuggestionError>At least one digit</SuggestionError>
      ) : (
        <SuggestionCleared>At least one digit</SuggestionCleared>
      )}
      {meta.value === "" && meta.error === undefined ? (
        <Suggestion>At least 8 characters</Suggestion>
      ) : (meta.value.length >= 1 && meta.value.length < 8) ||
        (meta.value.length < 1 && meta.error === "Please enter a password") ? (
        <SuggestionError>At least 8 characters</SuggestionError>
      ) : (
        <SuggestionCleared>At least 8 characters</SuggestionCleared>
      )}
    </>
  );
};

export default PasswordFormField;
