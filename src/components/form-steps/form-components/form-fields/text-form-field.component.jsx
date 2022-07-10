import { useField } from "formik";

import {
  FormLabel,
  TextFormInput,
  SuggestionError,
} from "./form-fields.styles";

const TextFormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>
        {label}
        <TextFormInput {...field} {...props} />
      </FormLabel>

      {(meta.value && meta.error) || meta.touched ? (
        <SuggestionError>{meta.error}</SuggestionError>
      ) : null}
    </>
  );
};

export default TextFormField;
