import styled from "styled-components";

export const LinkButtonWrapper = styled.a`
  text-decoration: none;
  margin-bottom: 8.2em;
  @media (min-width: 1024px) {
    order: -1;
  }
`;

export const Button = styled.button`
  display: block;
  border: none;
  margin: 1em;
  &:hover {
    cursor: pointer;
  }
  span {
    display: block;
    padding: 1em 3.5em;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.015em;
  }
`;

export const SubmitButton = styled(Button)`
  background: #ec1115;
  border-radius: 64px;
  &:hover {
    background: #a60c0e;
  }
  &:focus {
    background: #a60c0e;
    border: 5px solid #f47073;
  }
  span {
    color: #ffffff;
  }
`;

export const LoginButton = styled(Button)`
  background: transparent;
  span {
    color: #ec1115;
  }
`;
