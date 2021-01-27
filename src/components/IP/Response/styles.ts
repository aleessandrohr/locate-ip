import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0;

    > h1 {
      color: #cac9c9;
    }

    > span {
      padding-left: 0.1rem;
    }
  }
`;
