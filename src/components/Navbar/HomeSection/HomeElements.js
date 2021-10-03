import styled from "styled-components";

export const HomeSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem calc((90vw - 1000px) / 2);
  padding-top: 85px;
  position: relative;
  background: #020424;
  margin-top: 90px;
`;

export const HomeBg = styled.div`
  background: #091434;
  width: 95%;
  height: 570px;
  padding-top: 40px;
  position: relative;
  animation: Card 2s;
  animation-timing-function: ease-in;
  @keyframes Card {
    from {
      right: 200px;
    }
    to {
      right: 0px;
    }
  }
`;

export const HomeImg = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  right: 370px;
  bottom: -25px;
  padding-bottom: (height / width * 100) + "%";
  animation: mymove 2s;
  animation-timing-function: ease-in;

  @keyframes mymove {
    from {
      right: 0px;
    }
    to {
      right: 370px;
    }
  }
`;

export const ImageHolder = styled.img`
  height: 530px;
  width: 550px;
`;

export const HomeContent = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  padding-top: 30px;
  padding-left: 80px;

  background: none;
`;

export const HomeH4 = styled.p`
  font-size: 15px;
  letter-spacing: 2px;
  color: #d5d6e5;
  font-weight: 100px;
  background: none;
  padding-bottom: 20px;
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  background: none;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomeH1Colored = styled.h1`
  font-size: 48px;

  background: linear-gradient(
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
  }
`;

export const HomeP = styled.p`
  padding-top: 20px;
  font-size: 16px;
  color: #d5d6e5;
  font-weight: none;
  background: none;
  word-spacing: 1px;
  letter-spacing: 1.2px;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const HomeBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: none;
  max-width: 400px;
  align-items: center;
  margin-top: 60px;
  margin-left: 50px;
`;

export const HomeBtn = styled.button`
  border-radius: 20px;
  background: #8862e0;
  font-size: 15px;
  color: #e9e9f1;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  padding: 15px 25px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const HomeSellBtn = styled.button`
  color: white;
  border-radius: 20px;
  background: transparent;
  border: solid 2px;
  border-color: #8862e0;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  padding: 13px 25px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #8862e0;
    color: #010606;
  }
`;
