import styled from "styled-components";

export const StyledFooter = styled.div`
  position:absolute;
  bottom: 1rem;
  width: 60%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--grey-2);
  border-radius: 5px;
  background-color: var(--white);

  .container-footer {
    width: 85%;
    height: 60%; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
  }
  .container-footer button{
    width: 85%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: var(--grey-1);
    outline:none;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 18px;
    font-style: italic;
    text-transform: uppercase;
    cursor: pointer;
    :hover {
      background-color: var(--grey-0);
      outline:none;
      color: var(--secondary-color);
    }
  }
  @media(max-width: 1200px) {
    width: 85%;
  }
  @media(max-width: 950px) {
    width: 85%;
    bottom: 2.5rem;

    .container-footer {
      gap:10px;
    }
    .container-footer button{
      width: 100%;
      font-size: 16px;
    }
  }
  @media(max-width: 600px) {
    bottom: -8rem;
    width: 100%;
    border: none;
    border-radius: 0;
    border-top: 3px solid var(--grey-2);

    .container-footer {
      width: 80%;
      height: 60%; 
      gap:10px;
    }
    .container-footer button{
      width: 100%;
      border-radius: 3px;
      font-size: 14px;
    }
  }
`;
