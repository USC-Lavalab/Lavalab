// Stuff for tiling
import React from "react";

import Image from "next/image";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 95%;
  max-width: 1044px;
  margin: 30px auto;
  padding: 20px 0;
`;

const TileRow = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;

  @media only screen and (max-width: 1115px) {
    display: block;
    padding: 0;

    .community {
      height: 800px;
    }
  }
`;

const Tile = styled.div`
  position: relative;
  height: 512px;
  width: 512px;
  background-color: white;

  @media only screen and (max-width: 1115px) {
    height: ${props => (props.height ? "600px" : "420px")};
  }
`;

const FreeTile = styled.div`
  position: relative;
  background-color: white;

  hr {
    position: absolute;
    height: 0;
    margin: 0 auto;
    border: none;
    border-top: 1px solid #e5e5ea;
    margin-top: 20px;
    left: 30px;
    right: 30px;
    top: 0;
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

const ImageTileBase = styled(Tile)`
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
  }
`;

const ImageTile = ({ src, ...props }) => (
  <ImageTileBase {...props}>
    <Image src={src} alt={""} layout="fill" objectFit="cover" objectPosition="center" />
    {props.children}
  </ImageTileBase>
);

const StyledContentTile = styled(Tile)`
  width: ${({ type }) => (type === "full" ? 1044 : 512)}px;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  @media only screen and (min-width: 1115px) {
    height: ${({ height }) => height}px;
  }

  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
  }

  .content {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-top: 1px solid ${({ theme }) => (theme === "dark" ? "#2c2c2e" : "#e5e5ea")};
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

  .employment-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    width: 100%;

    @media only screen and (max-width: 1115px) {
      margin-top: 40px;
    }

    .employment-item {
      flex: 1 0 21%;
      text-align: center;
      color: #8e8e93;
      margin-bottom: 40px;
      @media only screen and (max-width: 1115px) {
        margin-bottom: 20px;
      }

      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        height: 48px;
      }

      .more-icon {
        height: 20px;
        border: 1px solid white;
        padding: 4px;
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius: 100px;
      }
    }
  }
`;

const ContentTile = props => {
  return (
    <StyledContentTile theme={props.theme} type={props.type} height={props.height}>
      <p className="title">{props.title}</p>
      <div className="content">{props.children}</div>
    </StyledContentTile>
  );
};

const StyledCommunityTile = styled(Tile)`
  width: ${({ type }) => (type === "full" ? 1044 : 512)}px;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  height: 450px;

  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
    height: 450px;
  }

  @media only screen and (max-width: 605px) {
    height: 550px;
  }

  .content {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-top: 1px solid ${({ theme }) => (theme === "dark" ? "#2c2c2e" : "#e5e5ea")};
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

const CommunityTile = props => {
  return (
    <StyledCommunityTile theme={props.theme} type={props.type} height={props.height}>
      <p className="title">{props.title}</p>
      <div className="content">{props.children}</div>
    </StyledCommunityTile>
  );
};

const StyledEventLabel = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  bottom: 20px;
  height: 80px;
  width: 340px;
  background-color: white;
  align-items: center;
  font-size: 16px;
  line-height: 18px;

  @media only screen and (max-width: 1115px) {
    width: 90%;
  }

  img {
    height: 18px;
    width: 18px;
    padding: 8px;
    border: 1px solid #ff5c39;
    border-radius: 100px;
    margin-left: 30px;
    margin-right: 15px;
  }

  .eventName {
    font-family: "NeurialGrotesk-Medium";
  }

  .eventDate {
    color: #8e8e93;
  }
`;

const EventLabel = props => {
  return (
    <StyledEventLabel>
      <Image src={props.icon} alt="" />
      <div className="eventDetails">
        <p className="eventName">{props.name}</p>
        <p className="eventDate">
          {props.location} · {props.date}
        </p>
      </div>
    </StyledEventLabel>
  );
};

export { ContentContainer, TileRow, Tile, ImageTile, ContentTile, EventLabel, FreeTile, CommunityTile };
