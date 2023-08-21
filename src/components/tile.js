// Stuff for tiling
import React from "react"
import styled from "styled-components"

const ContentContainer = styled.div`
  width: 95%;
  max-width: 1044px;
  margin: 30px auto;
  padding: 20px 0;
`

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
`

const Tile = styled.div`
  position: relative;
  height: 512px;
  width: 512px;
  background-color: white;

  @media only screen and (max-width: 1115px) {
    height: ${props => (props.height ? "600px" : "420px")};
  }
`

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
`
const ImageTileHeight = styled(Tile)`
  background-image: url(${props => props.image});
  background-size: cover;
  height: ${props => (props.height ? props.height : "100%")} !important;
  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
    height: ${props => (props.height ? props.height : "100%")} !important;
  }
`
const ImageTile = styled(Tile)`
  background-image: url(${props => props.image});
  background-size: cover;
  @media only screen and (max-width: 1115px) {
    margin: 10px auto;
    width: 100%;
  }
`

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
    border-top: 1px solid
      ${({ theme }) => (theme === "dark" ? "#2c2c2e" : "#e5e5ea")};
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
`

const ContentTile = props => {
    return (
        <StyledContentTile
            theme={props.theme}
            type={props.type}
            height={props.height}
        >
            <p className="title">{props.title}</p>
            <div className="content">{props.children}</div>
        </StyledContentTile>
    )
}

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
    border-top: 1px solid
      ${({ theme }) => (theme ==="dark" ? "#2c2c2e" : "#e5e5ea")};
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
`

const CommunityTile = props => {
    return (
        <StyledCommunityTile
            theme={props.theme}
            type={props.type}
            height={props.height}
        >
            <p className="title">{props.title}</p>
            <div className="content">{props.children}</div>
        </StyledCommunityTile>
    )
}

const EmploymentTile = styled(ContentTile)`
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1115px) {
    height: 560px;
  }
`

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
`

const EventLabel = props => {
    return (
        <StyledEventLabel>
            <img src={props.icon} alt=""/>
            <div className="eventDetails">
                <p className="eventName">{props.name}</p>
                <p className="eventDate">
                    {props.location} · {props.date}
                </p>
            </div>
        </StyledEventLabel>
    )
}

let StyledMastheadTile = styled(Tile)`
  width: ${({ type }) => (type === "full" ? 1044 : 512)}px;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
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
    border-top: 1px solid
      ${({ theme }) => (theme === "dark" ? "#2c2c2e" : "#e5e5ea")};
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
`

const MastheadTile = props => {
    return (
        <StyledMastheadTile
            theme={props.theme}
            type={props.type}
            height={props.height}
        >
            <p className="title">{props.title}</p>
            <div className="content">{props.children}</div>
        </StyledMastheadTile>
    )
}

const Masthead = styled.div`
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
`

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
    font-weight: "bold";
    font-style: "normal";
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
`

export {
    ContentContainer,
    TileRow,
    Tile,
    ImageTile,
    ImageTileHeight,
    ContentTile,
    EmploymentTile,
    EventLabel,
    Masthead,
    MastheadTextTile,
    FreeTile,
    CommunityTile,
    MastheadTile,
}
