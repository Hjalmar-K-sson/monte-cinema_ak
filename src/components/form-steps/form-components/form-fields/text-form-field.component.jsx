import { useField } from "formik";

import { FormLabel, FormInput, SuggestionError } from "./form-fields.styles";

const TextFormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>
        {label}
        <FormInput {...field} {...props} />
      </FormLabel>

      {(meta.value && meta.error) || meta.touched ? (
        <SuggestionError>{meta.error}</SuggestionError>
      ) : null}
    </>
  );
};

export default TextFormField;
