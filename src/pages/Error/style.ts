import styled from "styled-components";

export const StyledErrorSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--grey-2);
    border-radius: 5px;
    background-color: var(--white)
    }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    gap: 30px;

  }
  .content h1 {
    color: var(--grey-3);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    gap: 30px;
  }
  .content .div-links {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .content .div-links p {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    position: relative;
    color: var(--grey-3);
  }
  .link {
    display: flex;
    color: var(--secondary-color);
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: 18px;
    width: max-content;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--secondary-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media(max-width: 950px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 50%;
      }
    .content h1 {
      font-size: 44px;
    }
    .content .div-links p {
      font-size: 20px;
    }
    .link {
      font-size: 14px;
    }
  }
  @media(max-width: 600px) {
    .container {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: none;
      }
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 30px;
      gap: 30px;
    }
    .content h1 {
      font-size: 38px;
    }
    .content .div-links p {
      font-size: 18px;
    }
    .link {
      font-size: 13px;
    }
  }
`;