import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: 60%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--grey-2);
  border-radius: 5px;

  @media(max-width: 1200px) {
    width: 85%;
  }
  @media(max-width: 950px) {
    width: 85%;
  }
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    border: none;
    border-radius: none;
  }
`;

export const DivLeft = styled.div`
  width:60%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background-color: var(--white);
  padding:40px 0;

  @media(max-width: 950px) {
    width:60%;
    padding:30px 0;
  }
  @media(max-width: 600px) {
    width:100%;
    min-height:65vh;
    padding:0;
  }
`;

export const DivRight = styled.div`
  width: 40%;
  height:100%;
  gap:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color: var(--grey-1);

  .container-right {
    width: 70%;
    height:max-content;
    gap:30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
  }
  .container-right div {
    width:100%;
  }
  .container-right h2 {
    font-weight: 700;
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
    color: var(--primary-color);
  }
  hr {
    width:100%;
    border: 1px solid var(--tertiary-color);
  }
  .container-right p{
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    color: var(--secondary-color);
  }
  .container-right p span{
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
    color: var(--tertiary-color);
  }
  .loading {
    min-height: 160px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .loading div {
    width: 60px;
    height: 60px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .d1 ,
  .d2 {
    border: 5px solid var(--primary-color);
    border-radius: 50px;
  }
  .loading .d1 {
    width: 55px;
    height: 55px;
    position: absolute;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: load161 1s linear infinite;
  }
  .loading .d2 {
    width: 40px;
    height: 40px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    margin: 7.5px;
    animation: load2812 2s linear infinite;
  }
  @keyframes load161 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load2812 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
}
  @media(max-width: 950px) {
    gap:20px;
    padding: 30px 0;
    .container-right {
      gap:30px;
      width: 80%;
    }
    .container-right h2 {
      font-size: 16px;
    }
    .container-right p{
      font-size: 15px;
    }
    .container-right p span{
      font-size: 15px;
    }
  }
  @media(max-width: 600px) {
    width: 100%;
    gap:30px;
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;

    .container-right {
      width: 80%;
      height:100%;
      gap:30px;
    }
    .container-right div {
      width:100%;
    }
  }
`;