import { useContext } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";
import TextFormField from "./form-components/form-fields/text-form-field.component";
import PasswordFormField from "./form-components/form-fields/password-form-field.component";
import FormSubmitButton from "./form-components/form-buttons/form-submit-button.component";
import LoginInsteadButton from "./form-components/form-buttons/login-instead-button.component";

import { ContentContainer, StyledForm, FormButtonWrapper } from "./form.styles";

import { Formik } from "formik";
import { authFormValidationSchema } from "../../utils/yup-utils/form-validation.schema";

const AuthDataFormStep = () => {
  const { activeStepId, setActiveStepId, formData, setFormData } =
    useContext(FormContext);

  return (
    <ContentContainer>
      <FormHeading
        headerText={"Ahoy You!"}
        subHeaderText={"Care to register?"}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={authFormValidationSchema}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          console.log(data);
          setFormData(data);
          setActiveStepId(activeStepId + 1);
        }}
      >
        <StyledForm>
          <TextFormField
            label="email"
            name="email"
            type="email"
            placeholder="Something ending with monterail.com"
            required
          />
          <PasswordFormField
            label="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <FormButtonWrapper>
            <FormSubmitButton buttonText="Next step" />
            <LoginInsteadButton href="#" buttonText="Log in instead" />
          </FormButtonWrapper>
        </StyledForm>
      </Formik>
    </ContentContainer>
  );
};

export default AuthDataFormStep;
