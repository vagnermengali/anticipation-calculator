import styled from "styled-components";

export const StyledCalculator = styled.div`
  width: 60%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--grey-2);
  border-radius: 5px;

  @media(max-width: 950px) {
    
  }
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
    flex-direction:column;
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
    
  }
  @media(max-width: 600px) {
    width:100%;
    padding:30px 0;
  }
`;

export const DivRight = styled.div`
  width: 40%;
  height:100vh;
  gap:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color: var(--grey-1);

  .container-right {
    width: 50%;
    height:100%;
    gap:30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
  }
  .container-right h2 {
    font-size:22px;
    font-weight: 800;
    font-style: italic;
    text-transform: uppercase;
    color: var(--primary-color);
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
    
  }
  @media(max-width: 600px) {
    width: 100%;
    gap:30px;

    .container-right {
      width: 80%;
      padding:20px 0;
      align-items: center;
    }
  }
`;



import styled from "styled-components";

export const StyledForm = styled.div`
    width:100%;
    height:75%;
    gap:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    background-color: var(--white);

  h1 {
    color: var(--grey-3);
    font-size: 30px;
    font-weight: 900;
  }
  .input-group {
    width:100%;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    gap:10px;
  }
  .input {
    width:100%;
    height: 45px;
    border: 2px solid var(--grey-2);
    border-radius: 5px;
    outline:none;
    padding: 0 1rem;
    :focus {
      border: 3px solid var(--secondary-color);
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .label {
    color: var(--grey-3);
  }
  .error {
    min-height:5px;
    color: var(--grey-4);
    font-size: 13px;
  }
  .no-error {
    min-height:5px;
    font-size: 13px;
  }
  @media(max-width: 950px) {
    
  }
  @media(max-width: 600px) {
    width:80%;
    height:100%;
    gap:15px;

    h1 {
      font-size: 20px;
      margin-bottom:10px
    }
    .input-group {
      gap:5px;
    }
  }
`;