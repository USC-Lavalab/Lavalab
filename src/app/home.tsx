import React from "react";

import Image from "next/image";
import styled from "styled-components";

import About from "@/components/about";
import { CarouselSlide, SinglePanel } from "@/components/carousel";
import Employment from "@/components/employment";
import Events from "@/components/events";
import ExecBoard from "@/components/exec-board";
import ImageHero from "@/components/image-hero";
import Masthead from "@/components/masthead";
import Projects from "@/components/projects";
import Roles from "@/components/roles";
import {
  CommunityTile,
  ContentContainer,
  ContentTile,
  EventLabel,
  FreeTile,
  ImageTile,
  TileRow,
} from "@/components/tile";

import DemoNightIcon from "../../static/icon/Events/Demo-Night-Icon/Highlight.png";
import PersonIcon from "../../static/icon/Person-Icon/Highlight.png";
import Fall2018BeachBonfire from "../../static/img/Fall-2018-Beach-Bonfire.jpg";
import TileDemoNight from "../../static/img/Fall-2019-Demo-Night.jpg";
import HeroTop from "../../static/img/Fall-2019-Retreat.jpg";
import LavaLabLogoHighlight from "../../static/lavalab-logo-highlight.png";
import LavaLabLogo from "../../static/lavalab-logo.png";
import LavaLearnLogoWhite from "../../static/lavalearn-white.png";
import "./home.css";

const HomePage = () => {
  return (
    <div className="page">
      <ImageHero src={HeroTop}>
        <div className="hero-content">
          <Image src={LavaLabLogo} alt="LavaLabLogo" width={250} />
          <HeroDivider></HeroDivider>
          <h1 className="hero-header">Find Your Cofounders</h1>
          <div className="bottom-row"></div>
        </div>
      </ImageHero>

      <ContentContainer>
        <TileRow id={"about"}>
          <About />
          <ContentTile image={HeroTop} className="video" height={550}>
            <iframe
              src="https://player.vimeo.com/video/668728641?h=51f392d0c5"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                padding: "0 auto",
                paddingBottom: 16,
                textAlign: "center",
                width: "100%",
                height: "100%",
                maxHeight: 550,
              }}
              allowFullScreen
              title="Lavalab Fall 2021 Promo"
            ></iframe>
          </ContentTile>
        </TileRow>

        <TileRow id={"join"}>
          <Masthead />
        </TileRow>

        <TileRow>
          <ImageTile src={TileDemoNight} height={"100%"}>
            <EventLabel icon={DemoNightIcon} name="Demo Night" location="Los Angeles, CA" date="Fall 2019" />
          </ImageTile>
          <Roles />
        </TileRow>
        <TileRow id={"events"}>
          <Events />
        </TileRow>
      </ContentContainer>
      <ImageHero src={Fall2018BeachBonfire}>
        <div className="event-container">
          <EventLabel icon={DemoNightIcon} name="Retreat" location="Los Angeles, CA" date="Fall 2019" />
        </div>
      </ImageHero>
      <ContentContainer>
        <TileRow>
          <CommunityTile type="full" title="Community">
            <SinglePanel>
              <CarouselSlide>
                <h1>A network of passionate innovators, over 350 members strong and growing.</h1>
                <p>
                  The LavaLab network is like no other. We are a community of entrepreneurs, go-getters, and change
                  makers who value connection, deep engagement, and building for a brighter future. Grow together in an
                  environment that meets you where you’re at and pushes you to become the best version of yourself. At
                  LavaLab, you’ll meet your future co-founders and some of your closest friends.
                </p>
              </CarouselSlide>
            </SinglePanel>
          </CommunityTile>
        </TileRow>
      </ContentContainer>
      <ImageHero className="quote">
        <div className="quote-content">
          <span>“</span>
          <br />
          Lavalab made my semester one of the most rewarding experiences as a student so far. Turning a vision into a
          reality, finding lifelong friends and potential cofounders, and learning to hustle make this something I'd
          recommend to everyone.
          <div className="quote-profile">
            <Image src={PersonIcon} alt="" />

            <div className="quote-profile-details">
              <p className="name">Shub Gaur</p>
              <p className="detail">Product Manager · Spring 2020</p>
            </div>
          </div>
        </div>
      </ImageHero>

      <ContentContainer>
        <TileRow id="alumni">
          <Projects />
          <Employment />
        </TileRow>
        <TileRow>
          <FreeTile title="Executive Team">
            <hr />
            <p className="title">Executive Team</p>
            <ExecBoard />
          </FreeTile>
        </TileRow>
      </ContentContainer>
      <StyleHeader className="navbar">
        <a href="/">
          <Image src={LavaLabLogoHighlight} alt="" />
        </a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#join">Join</a>
          <a href="#events">Events</a>
          <a href="#alumni">Alumni</a>
          <a href="#footer">Contact</a>
          <a
            href="https://learn.usclavalab.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "black", padding: 10, borderRadius: 5 }}
          >
            <Image src={LavaLearnLogoWhite} alt="" />
          </a>
        </div>
      </StyleHeader>
    </div>
  );
};

const HeroDivider = styled.div`
  height: 1px;
  background-color: white;
  margin: 0 auto;
`;

const StyleHeader = styled.div`
  @media only screen and (max-width: 1115px) {
    display: none;
  }
  position: absolute;
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

export default HomePage;
