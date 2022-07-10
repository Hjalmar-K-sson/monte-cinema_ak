import { LinkButton } from "./form-buttons.styles";

const LoginInsteadButton = ({ href, buttonText }) => {
  return <LinkButton href={href}>{buttonText}</LinkButton>;
};

export default LoginInsteadButton;
