import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > div {
    background-color: rgba(0, 0, 0, 0.72);
    color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    padding: 1.6rem 1rem;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Title = styled.div`
  > h1 {
    font-size: 3rem;
    text-align: center;
  }

  > form {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > input {
      outline: 0;
      border-width: 0;
      border-radius: 5px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.28);
    }

    > .search {
      background-color: #fff;
      width: 12rem;
      height: 1.6rem;
      padding-left: 0.25rem;
    }

    > .submit {
      font-size: 1.2rem;
      width: 6rem;
      height: 2rem;
      margin-top: 1.2rem;
      background-color: #ff1717;
      color: white;
      transition: background-color ease 0.5s, color ease 0.25s;
      cursor: pointer;

      &:hover {
        background-color: #fff;
        color: black;
      }
    }
  }
`;

export const Response = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;

    > h1 {
      font-size: 1rem;
      color: #cac9c9;
      font-weight: 600;
    }

    > p {
      padding-left: 0.2rem;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
