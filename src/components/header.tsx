import React from "react";

import Image from "next/image";
import styled from "styled-components";

import LavaLabLogoHighlight from "../../static/lavalab-logo-highlight.png";

export default function Header() {
  return (
    <StyleHeader>
      <a href="/">
        <Image src={LavaLabLogoHighlight} alt="" priority />
      </a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#join">Join</a>
        <a href="#events">Events</a>
        <a href="#alumni">Alumni</a>
        <a href="#footer">Contact</a>
      </div>
    </StyleHeader>
  );
}

const StyleHeader = styled.div`
  @media only screen and (max-width: 1115px) {
    display: none;
  }
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: white;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  padding: 10px 30px;

  .links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    a {
      margin-left: 40px;
    }
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
  }
`;
