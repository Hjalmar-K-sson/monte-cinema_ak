import { ReactComponent as MonteLogo } from "../../assets/logo.svg";

import { HeaderContainer, HeaderSlogan } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <MonteLogo />
      <HeaderSlogan>Developed with ♥ by Monterail</HeaderSlogan>
    </HeaderContainer>
  );
};

export default Header;
