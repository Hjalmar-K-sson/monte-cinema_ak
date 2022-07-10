import { useContext } from "react";
import { FormContext } from "../../context/form.context";

import AuthDataFormStep from "../form-steps/auth-data-form-step.component";
import PersonalDataFormStep from "../form-steps/personal-data-form-step.component";
import FormSubmitSuccessStep from "../form-steps/form-submit-success-step.component";

const FormStepWrapper = () => {
  const { activeStepId } = useContext(FormContext);
  let formStep;

  switch (activeStepId) {
    case 0:
      formStep = <AuthDataFormStep />;
      break;
    case 1:
      formStep = <PersonalDataFormStep />;
      break;
    case 2:
      formStep = <FormSubmitSuccessStep />;
      break;
    default:
      break;
  }
  return formStep;
};

export default FormStepWrapper;
