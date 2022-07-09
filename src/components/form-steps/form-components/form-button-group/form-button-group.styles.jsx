import styled from "styled-components";

export const FormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
