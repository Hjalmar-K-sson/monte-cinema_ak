import { useState } from "react";

import { useField } from "formik";

import { ReactComponent as ToggleVisibilityIcon } from "../../../../assets/eye.svg";

import {
  FormLabel,
  TextFormInput,
  Suggestion,
  SuggestionError,
  SuggestionCleared,
} from "./form-fields.styles";

const PasswordFormField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>
        {label}
        <TextFormInput
          type={passwordVisible ? "text" : "password"}
          {...field}
          {...props}
        />
        <ToggleVisibilityIcon onClick={togglePasswordVisible} />
      </FormLabel>
      {!meta.touched ? (
        <Suggestion>At least one letter</Suggestion>
      ) : (meta.value.length >= 1 && meta.error === "At least one letter") ||
        (meta.value.length >= 1 && meta.error === "Please enter a password") ||
        (meta.value.length < 1 && meta.error === "Please enter a password") ? (
        <SuggestionError>At least one letter</SuggestionError>
      ) : (
        <SuggestionCleared>At least one letter</SuggestionCleared>
      )}
      {!meta.touched ? (
        <Suggestion>At least one digit</Suggestion>
      ) : (meta.value.length >= 1 && meta.error === "At least one digit") ||
        (meta.value.length >= 1 && meta.error === "Please enter a password") ||
        (meta.value.length < 1 && meta.error === "Please enter a password") ? (
        <SuggestionError>At least one digit</SuggestionError>
      ) : (
        <SuggestionCleared>At least one digit</SuggestionCleared>
      )}
      {!meta.touched ? (
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
