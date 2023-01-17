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
    height:100%;
    padding:20px 0;
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
    height:100%;
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
    height:100%;
    gap:30px;
    padding: 20px 0;

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