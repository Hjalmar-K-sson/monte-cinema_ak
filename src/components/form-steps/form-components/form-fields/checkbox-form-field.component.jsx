import { useField } from "formik";
import {
  CheckboxLabel,
  HiddenCheckbox,
  CustomCheckbox,
  SuggestionError,
} from "./form-fields.styles";

const CheckboxFormField = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <CheckboxLabel>
        <HiddenCheckbox {...field} {...props} type="checkbox" />
        <CustomCheckbox />
        {props.label}
        <a href={props.href}>{props.labelLink}</a>
      </CheckboxLabel>
      {meta.touched && meta.error ? (
        <SuggestionError>{meta.error}</SuggestionError>
      ) : null}
    </>
  );
};

export default CheckboxFormField;
