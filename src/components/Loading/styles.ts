import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: " ";
    width: 4rem;
    height: 4rem;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading 1.2s linear infinite;

    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
