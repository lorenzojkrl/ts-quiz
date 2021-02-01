import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #6b181861;
  border-radius: 10px;
  // border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0 5 10 rgba(0, 0, 0, 0.25);
  text-align: center;
  color: white;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClick: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8 rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClick }) =>
      correct
        ? "linear-gradient(90deg,#6feca938,#41de8863)"
        : !correct && userClick
        ? "linear-gradient(90deg,#ff565685,#c1686880)"
        : "linear-gradient(180deg,#919cb285,#500a0ac7)"};
    // border: 3px solid #fff;
    // box-shadow: 1px 2px 0px rgba(0, 0, 0, rgba 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
