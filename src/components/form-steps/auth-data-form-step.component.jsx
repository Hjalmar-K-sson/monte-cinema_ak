import { useContext, useState } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";
import TextFormField from "./form-components/form-fields/text-form-field.component";
import FormButtonGroup from "./form-components/form-button-group/form-button-group.component";

import {
  ContentContainer,
  FormContainer,
  StyledForm,
  ToggleVisibilityButton,
} from "./form.styles";

import { Formik } from "formik";
import { authFormValidationSchema } from "../../utils/yup-utils/form-validation.schema";

const AuthDataFormStep = () => {
  const { activeStepId, setActiveStepId, formData, setFormData } =
    useContext(FormContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <ContentContainer>
      <FormHeading
        headerText={"Ahoy You!"}
        subHeaderText={"Care to register?"}
      />
      <FormContainer>
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
              placeholder="email"
            />
            <TextFormField
              label="password"
              name="password"
              type="password"
              placeholder="password"
            >
              <ToggleVisibilityButton onClick={togglePasswordVisible} />
            </TextFormField>
            <FormButtonGroup
              submitButtonText="Next step"
              loginButtonText="Log in instead"
            />
            {/* <ToggleVisibilityIcon /> */}
          </StyledForm>
        </Formik>
      </FormContainer>
    </ContentContainer>
  );
};

export default AuthDataFormStep;
