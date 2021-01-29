import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./images/john-towner-JgOeRuGD_Y4-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    
    body {
        background-image: url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Garamond;
    background-image: linear-gradient(180deg, #919cb2, #500a0a);
    background-size: 100%;
    // Sets how an element's background extends underneath itself.
    // text value: background is clipped to the foreground text
    background-clip: text;
    // webkit is a rendering engine for Safari & Chrome only
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // To be reviewed
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(1px 1px #005);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #919cb2, #312c48);
    border: 1px solid #005;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    color: #919cb2;
  }
`;
