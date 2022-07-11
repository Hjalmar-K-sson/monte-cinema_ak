import { useField } from "formik";

import {
  FormLabel,
  FormInput,
  Suggestion,
  SuggestionError,
} from "./form-fields.styles";

const DateFormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("date:", meta);
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>
        {label}
        <FormInput {...field} {...props} />
      </FormLabel>

      {!meta.touched || (meta.value === "" && meta.error === undefined) ? (
        <Suggestion>You should be minimum 18 years old</Suggestion>
      ) : meta.touched && meta.error === "Please enter Your date of birth" ? (
        <SuggestionError>{meta.error}</SuggestionError>
      ) : meta.value !== "" &&
        meta.error === "You should be minimum 18 years old" ? (
        <SuggestionError>{meta.error}</SuggestionError>
      ) : null}
    </>
  );
};

export default DateFormField;
