import { useContext } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";
import TextFormField from "./form-components/form-fields/text-form-field.component";
import DateFormField from "./form-components/form-fields/date-form-field.component";
import CheckboxFormField from "./form-components/form-fields/checkbox-form-field.component";
import FormSubmitButton from "./form-components/form-buttons/form-submit-button.component";
import LoginInsteadButton from "./form-components/form-buttons/login-instead-button.component";

import { ContentContainer, StyledForm, FormButtonWrapper } from "./form.styles";

import { Formik } from "formik";
import { personalFormValidationSchema } from "../../utils/yup-utils/form-validation.schema";

const PersonalDataFormStep = () => {
  const { activeStepId, setActiveStepId, formData, setFormData } =
    useContext(FormContext);

  return (
    <ContentContainer>
      <FormHeading headerText={"Great!"} subHeaderText={"Now your name"} />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
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
            placeholder="e.g. Jessica"
            required
          />
          <TextFormField
            label="last name"
            name="lastName"
            type="text"
            placeholder="e.g. Walton"
            required
          />
          <DateFormField
            label="date of birth"
            name="dateOfBirth"
            type="date"
            required
          />
          <CheckboxFormField
            label="I accept "
            labelLink="Privacy Policy"
            href="#"
            name="acceptPrivacyPolicy"
          />
          <FormButtonWrapper>
            <FormSubmitButton buttonText="Register" />
            <LoginInsteadButton href="#" buttonText="Log in instead" />
          </FormButtonWrapper>
        </StyledForm>
      </Formik>
    </ContentContainer>
  );
};

export default PersonalDataFormStep;
