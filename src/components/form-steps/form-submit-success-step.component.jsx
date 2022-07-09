import { useContext } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";

import { ContentContainer, SuccessParagraph } from "./form.styles";

const FormSubmitSuccessStep = () => {
  const { formData, activeStepId, setActiveStepId } = useContext(FormContext);
  console.log("loggingfrom FormSubmitSuccessStep", formData);
  return (
    <ContentContainer>
      <FormHeading headerText={`Good job ${formData.firstName}!`} />
      <SuccessParagraph>
        <>
          We have sent you an email to <strong>{formData.email}</strong>.
          <br />
          Make sure to click the link from the message to activate your account.
        </>
      </SuccessParagraph>
    </ContentContainer>
  );
};

export default FormSubmitSuccessStep;
