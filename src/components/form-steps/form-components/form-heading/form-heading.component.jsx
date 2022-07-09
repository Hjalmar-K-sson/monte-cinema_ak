import {
  FormHeadingContainer,
  FormHeader,
  FormSubHeader,
} from "./form-heading.styles";

const FormHeading = ({ headerText, subHeaderText }) => {
  return (
    <FormHeadingContainer>
      <FormHeader>{headerText}</FormHeader>
      <FormSubHeader>{subHeaderText}</FormSubHeader>
    </FormHeadingContainer>
  );
};

export default FormHeading;
