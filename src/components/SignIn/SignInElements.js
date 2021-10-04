import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Design = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const FormHeader = styled.p`
  font-size: 48px;
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translate(-50%, -50%);
  background: transparent;
  color: #fff;
`;

export const CloseIconSignIn = styled(GrClose)`
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
  top: 210px;
  background: transparent;
  left: 90px;
  font-size: 14px;
`;

export const ErrorMessageSignIn = styled.div`
  color: #10ced2;
  font-weight: bold;
  position: absolute;
  font-size: 15px;
  background: transparent;
  bottom: 250px;
  left: 155px;
`;
