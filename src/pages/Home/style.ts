import styled from "styled-components";

export const StyledHomeSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    top: 4rem;
    display: flex;
    color: var(--secondary-color);
    font-weight: bold;
    text-decoration: none;
    position: absolute;
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
`;
