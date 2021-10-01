import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Design = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const FormHeaderSignUp = styled.p`
  font-size: 48px;
  position: absolute;
  left: 50%;
  top: 120px;
  padding-bottom: 90px;
  padding-top: 60px;
 

  transform: translate(-50%, -50%);
  /* background: linear-gradient(
    to right,
    #b664c9 20%,
    #bd71ba 40%,
    #c25cf6 50%,
    #a369d1 60%,
    #5855df 80%
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 3.5s linear infinite;
  @keyframes shine {
    0% {
      background-position: 0% center;
    }
    60% {
      background-position: 200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } */
  background: transparent;
  color: #fff;
`;

export const CloseIconSignUp = styled(GrClose)`
  color: white;
  position: absolute;

  font-weight: bolder;

  background: transparent;
  z-index: 1;
  width: 25px;
  height: 25px;
  right: 30px;
  top: 25px;
`;

export const Text = styled.div`
  position: absolute;
  color: white;
  top: 175px;
  background: transparent;
  left: 90px;
  font-size: 14px;
`;

