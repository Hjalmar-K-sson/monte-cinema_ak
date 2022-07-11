import { HomepageLinkButton } from "./form-buttons.styles";

const HomePageButton = ({ href, buttonText }) => {
  return <HomepageLinkButton href={href}>{buttonText}</HomepageLinkButton>;
};

export default HomePageButton;
