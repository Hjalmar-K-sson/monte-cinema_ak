import { FormButtonWrapper } from "./form-button-group.styles";
import FormSubmitButton from "../form-submit-button/form-submit-button.component";
import LoginInsteadButton from "../form-submit-button/login-instead-button.component";

const FormButtonGroup = ({ submitButtonText, loginButtonText }) => {
  return (
    <FormButtonWrapper>
      <FormSubmitButton type="submit" buttonText={submitButtonText} />
      <LoginInsteadButton type="button" buttonText={loginButtonText} />
    </FormButtonWrapper>
  );
};

export default FormButtonGroup;
