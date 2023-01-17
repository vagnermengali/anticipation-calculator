import styled from "styled-components";

export const StyledForm = styled.form`
    width:65%;
    height:75%;
    gap:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    background-color: var(--white);
  h1 {
    color: var(--grey-3);
    font-weight: 900;
    font-size: 22px;
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
    font-size: 15px;
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
    width:70%;
    gap:20px;

  h1 {
    width:100%;
    text-align:center;
    font-size: 17px;
  }
  .input-group {
    gap:10px;
  }
  .input {
    height: 40px;
  }
  .label {
    color: var(--grey-3);
    font-size: 15px;
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
  }
  @media(max-width: 600px) {
    width:80%;
    height:100%;
    gap:20px;

    h1 {
      width:100%;
      text-align:center;
      font-size: 19px;
    }
    .input-group {
      width: 95%;
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
    .label {
      font-size: 14px;
    }
  }
`;