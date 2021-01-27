import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #00000040;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00000090;
  color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 24rem;
  height: 28rem;
`;

export const Search = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-size: 2.6rem;
    font-weight: 600;
  }

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    > input {
      margin: 0.25rem;
      outline: transparent;
      border-width: 0;
      border-radius: 5px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.28);
    }

    > .search {
      background-color: #fff;
      width: 10.5rem;
      height: 1.6rem;
      font-size: 1rem;
      padding: 0 0.25rem;
    }

    > .submit {
      width: 6rem;
      height: 2rem;
      font-size: 1.2rem;
      margin: 1rem 0 0.5rem 0;
      background-color: transparent;
      border: 2px solid #fff;
      color: white;
      transition: background-color ease 0.6s, color ease 0.25s;
      cursor: pointer;

      &:hover {
        background-color: #ffffff;
        color: black;
        border: 2px solid #000;
      }
    }
  }
`;
