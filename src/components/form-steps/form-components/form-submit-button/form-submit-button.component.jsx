import { SubmitButton } from "./form-buttons.styles";

const FormSubmitButton = ({ type, buttonText }) => {
  return (
    <SubmitButton type={type}>
      <span>{buttonText}</span>
    </SubmitButton>
  );
};

export default FormSubmitButton;
