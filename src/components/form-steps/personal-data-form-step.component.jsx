import { useContext } from "react";

import { FormContext } from "../../context/form.context";

import FormHeading from "./form-components/form-heading/form-heading.component";
import TextFormField from "./form-components/form-fields/text-form-field.component";
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
          dateOfBirth: null,
          acceptPrivacyPolicy: false,
        }}
        validationSchema={personalFormValidationSchema}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          console.log(data);
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
          />
          <TextFormField
            label="last name"
            name="lastName"
            type="text"
            placeholder="e.g. Walton"
          />
          {/* <FormField
            label="date of birth"
            name="dateOfBirth"
            type="date"
            placeholder="dateOfBirth"
          /> */}
          {/* <FormField
            label="accept privacy policy"
            name="acceptPrivacyPolicy"
            type="checkbox"
            placeholder="acceptPrivacyPolicy"
          /> */}
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

// import { useContext } from "react";

// import { FormContext } from "../../context/form.context";

// import FormHeading from "./form-components/form-heading/form-heading.component";
// import FormField from "./form-components/form-fields/form-field.component";
// import FormButtonGroup from "./form-components/form-button-group/form-button-group.component";

// import { ContentContainer, FormContainer, StyledForm } from "./form.styles";

// import { Formik } from "formik";
// import { personalFormValidationSchema } from "../../utils/yup-utils/form-validation.schema";

// const PersonalDataFormStep = () => {
//   const { activeStepId, setActiveStepId, formData, setFormData } =
//     useContext(FormContext);
//   console.log(activeStepId, formData);

//   return (
//     <ContentContainer>
//       <FormHeading headerText={"Great!"} subHeaderText={"Now Your name"} />
//       <FormContainer>
//         <Formik
//           initialValues={{
//             firstName: "",
//             lastName: "",
//             dateOfBirth: null,
//             acceptPrivacyPolicy: false,
//           }}
//           validationSchema={personalFormValidationSchema}
//           onSubmit={(values) => {
//             const data = { ...formData, ...values };
//             setFormData(data);
//             setActiveStepId(activeStepId + 1);
//           }}
//         >
//           <StyledForm>
//             <FormField
//               label="first name"
//               name="firstName"
//               type="text"
//               placeholder="firstName"
//             />
//             <FormField
//               label="last name"
//               name="lastName"
//               type="text"
//               placeholder="lastName"
//             />
//             <FormButtonGroup
//               submitButtonText="Register"
//               loginButtonText="Log in instead"
//             />
//           </StyledForm>
//         </Formik>
//       </FormContainer>
//     </ContentContainer>
//   );
// };
