import { useContext } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";
import TextFormField from "./form-components/form-fields/text-form-field.component";
import FormButtonGroup from "./form-components/form-button-group/form-button-group.component";

import { ContentContainer, FormContainer, StyledForm } from "./form.styles";

import { Formik } from "formik";
import { personalFormValidationSchema } from "../../utils/yup-utils/form-validation.schema";

const PersonalDataFormStep = () => {
  const { activeStepId, setActiveStepId, formData, setFormData } =
    useContext(FormContext);
  console.log(activeStepId, formData);

  return (
    <ContentContainer>
      <FormHeading headerText={"Great!"} subHeaderText={"Now Your name"} />
      <FormContainer>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            dateOfBirth: null,
            acceptPrivacyPolicy: false,
          }}
          validationSchema={personalFormValidationSchema}
          onSubmit={(values) => {
            const data = { ...formData, ...values };
            setFormData(data);
            setActiveStepId(activeStepId + 1);
          }}
        >
          <StyledForm>
            <TextFormField
              label="first name"
              name="firstName"
              type="text"
              placeholder="firstName"
            />
            <TextFormField
              label="last name"
              name="lastName"
              type="text"
              placeholder="lastName"
            />
            <FormButtonGroup
              submitButtonText="Register"
              loginButtonText="Log in instead"
            />
          </StyledForm>
        </Formik>
      </FormContainer>
    </ContentContainer>
  );
};

export default PersonalDataFormStep;
