import { LinkButtonWrapper, LoginButton } from "./form-buttons.styles";

const LoginInsteadButton = ({ type, buttonText }) => {
  return (
    <LinkButtonWrapper href="http://localhost:3000/" target="_blank">
      <LoginButton type={type}>
        <span>{buttonText}</span>
      </LoginButton>
    </LinkButtonWrapper>
  );
};

export default LoginInsteadButton;
