import {
  ContentContainer,
  FormHeader,
  FormSubHeader,
  FormContainer,
  Form,
  FormField,
  FormLabel,
  FormInput,
  SubmitButton,
} from "./form.styles";

import { useFormik } from "formik";

const AuthDataForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ContentContainer>
      <FormHeader>Ahoy You!</FormHeader>
      <FormSubHeader>Care to register?</FormSubHeader>
      <FormContainer>
        <Form onSubmit={formik.handleSubmit}>
          <FormField>
            <FormLabel>email</FormLabel>
            <FormInput type="email" placeholder="Email" />
          </FormField>
          <FormField>
            <FormLabel>password</FormLabel>
            <FormInput type="password" placeholder="Password" />
          </FormField>
          <SubmitButton>Next Step</SubmitButton>
        </Form>
      </FormContainer>
    </ContentContainer>
  );
};

export default AuthDataForm;
