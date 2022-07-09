import { useField } from "formik";

import {
  InputField,
  FormLabel,
  FormInput,
  Suggestion,
} from "./form-fields.styles";

const TextFormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputField>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <FormInput {...field} {...props} />
      {meta.value && meta.error ? <Suggestion>{meta.error}</Suggestion> : null}
    </InputField>
  );
};

export default TextFormField;
