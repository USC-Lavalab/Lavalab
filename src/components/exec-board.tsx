import React from "react";

import Image from "next/image";
import styled from "styled-components";

import execBoardData from "@/data/exec-board";

export default function ExecBoard() {
  return (
    <Container>
      {execBoardData.map(member => (
        <div className="member" key={member.name}>
          <div className="profile-pic">
            <Image src={member.imgSrc} fill={true} alt="" />
          </div>
          <div className="description">
            <Image className="eboard-icon" src={member.roleIconSrc} alt="" />
            <div className="description-inner">
              <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                <p className="name">{member.name}</p>
              </a>
              <p className="eboard-title">{member.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  padding-top: 60px;
  padding-bottom: 50px;

  .member {
    position: relative;
    width: 33.33%;
    display: block;
    box-sizing: border-box;
    padding: 0 30px;

    .profile-pic {
      background-color: grey;
      width: 100%;
      aspect-ratio: 1;
      margin: 0 auto;
      margin-top: 20px;
      display: block;
      position: relative;
    }

    .description {
      margin-top: 20px;
      display: flex;
      align-items: center;

      p {
        margin: 5px 0;
      }

      .eboard-icon {
        width: 35px;
        height: 35px;
        display: block;
        border: 1px solid #ff5c39;
        box-sizing: border-box;
        padding: 6px;
        border-radius: 100px;
      }

      .description-inner {
        margin-left: 10px;

        .eboard-title {
          text-transform: none;
          color: #8e8e93;
        }

        .linkedInLinks {
          color: black;
          text-decoration: none;
          &:hover {
            color: #ff5c39;
          }
        }

        .name {
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .member {
      padding: 20px;
    }
  }

  @media only screen and (max-width: 550px) {
    .member {
      width: 50%;
      margin: 0 auto;
      padding: 10px;
    }
  }
`;
