import React from "react";

import Image from "next/image";
import styled from "styled-components";

import { Tile } from "@/components/tile";
import mastheadData from "@/data/masthead";

import RightArrowIcon from "../../static/icon/Right-Arrow-Icon/Light.png";

export default function Masthead() {
  return (
    <Container title="What's Happening Now">
      <Content>
        <MastheadTextTile>
          <h1 className="hero-header tile-title">{mastheadData.mainContent.title}</h1>
          <a href={mastheadData.mainContent.actionUrl} target="_blank" rel="noopener noreferrer">
            <div className="be-notified">
              <p>{mastheadData.mainContent.actionText}</p>
              <Image src={RightArrowIcon} alt="" width={20} height={20} />
            </div>
          </a>
        </MastheadTextTile>
        <div className="right">
          {mastheadData.additionalContents.map((content, index) => (
            <div key={index} className="tile">
              <p className="tile-title">{content.title}</p>
              {content.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="detail">
                  {detail}
                </p>
              ))}
              <a href={content.actionUrl} target="_blank" rel="noopener noreferrer">
                <div className="be-notified">
                  <p>{content.actionText}</p>
                  <Image src={RightArrowIcon} alt="" width={20} height={20} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
}

let StyledMastheadTile = styled(Tile)`
  width: 1044px;
  background-color: white;
  color: black;
  height: 370px;

  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
    height: 550px;
  }

  @media only screen and (max-width: 850px) {
    height: 650px;
  }

  @media only screen and (max-width: 600px) {
    height: 950px;
  }

  .content {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-top: 1px solid #2c2c2e;
  }

  .title {
    position: absolute;
    left: 20px;
    top: 30px;
    text-transform: uppercase;
    font-family: "NeurialGrotesk-Medium";
    padding: 16px 0;
    font-size: 14px;
  }
`;

const Container = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <StyledMastheadTile>
      <p className="title">{title}</p>
      <div className="content">{children}</div>
    </StyledMastheadTile>
  );
};

const Content = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;

  .right {
    height: 90%;
    width: 55%;
    display: flex;

    .tile {
      position: relative;
      height: 100%;
      width: 50%;
      box-sizing: border-box;
      padding: 0 20px;
      padding-top: 20px;

      margin: 0 10px;
      background-color: #f2f2f7;

      .tile-title {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .detail {
        font-size: 14px;
      }

      .learn {
        width: 50%;
      }

      .apply {
        width: 50%;
      }
      .action-bar-container {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        background-color: black;

        .divider {
          height: 1px;
          color: #2c2c2e;
          width: 80%;
          margin: 0 auto;
        }

        .action-bar {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 60px;
          color: white;
          width: 100%;
          justify-content: space-between;
          padding: 0px 12px;
          box-sizing: border-box;

          .left-text {
            text-transform: uppercase;
            /* flex-basis: 45%; */
          }

          .right-text {
            text-align: right;
          }

          img {
            width: 14px;
            padding: 5px;
            border: 1px white solid;
            border-radius: 100px;
            cursor: pointer;
          }
        }
      }

      .be-notified {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        background-color: black;
        border-radius: 3px;
        padding: 12px 15px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        width: max-content;

        p {
          color: white;
          font-size: 14px;
          padding-right: 5px;
        }

        img {
          height: 20px;
          aspect-ratio: 1;
        }
      }
    }

    em {
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 1115px) {
    display: block;

    .right {
      margin-top: 20px;
      width: 100%;

      .tile {
        height: 300px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .right {
      display: block;

      .tile {
        height: 250px;
        width: 100%;
        margin: 0;
        margin-bottom: 20px;
        .action-bar-container {
          .action-bar {
            padding: 0 30px;
          }

          .left-text {
            flex-basis: 30%;
          }
        }
      }
    }
  }
`;

const MastheadTextTile = styled.div`
  width: 45%;
  position: relative;
  display: block;

  @media only screen and (max-width: 1115px) {
    width: 100%;
    margin-top: 60px;
  }

  h1 {
    font-family: "Editor";
    color: black;
    font-size: 36px;
    margin-top: 20px;
    line-height: 47px;
    font-weight: bold;
    font-style: normal;
  }

  .subheader {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ff5c39;
    padding: 10px 0;
  }

  .content {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: black;
    border-radius: 3px;
    padding: 12px 15px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    width: max-content;
    margin-top: 40px;
    p {
      color: #ffffff !important;
      text-decoration: none !important;
    }
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }
`;
