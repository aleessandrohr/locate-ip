import styled from "styled-components";

export const Container = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  > nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    font-family: "Roboto", sans-serif;
    background-color: rgb(20, 20, 20);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);

    > .primary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;

      > a {
        text-decoration: none;
        color: white;
        font-size: 1.6rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    > .items {
      > ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin-right: 1rem;

        > li {
          padding: 0.8rem;

          > a {
            text-decoration: none;
            color: white;
            font-size: 1.1rem;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  > .desktop {
    align-items: center;
  }

  > .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    > .desktop {
      display: none;
    }

    > .mobile {
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
      
      > .primary {
        margin-right: 1rem;

        > button {
          background-color: transparent;
          border-width: 0;
          outline: 0;

          > span {
            > i {
              font-size: 1.6rem;
              color: white;
              cursor: pointer;
            }
          }
        }
      }

      > .items {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.8s ease-in-out;

        > ul {
          flex-direction: column;
          align-items: flex-start;
          margin: 0.4rem 0 0 0.7rem;

          > li {
            padding: 0.4rem;
          }
        }
      }
    }
  }
`;
