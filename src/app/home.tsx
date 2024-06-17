import React from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import styled from "styled-components";

import { CarouselSlide, SinglePanel } from "@/components/carousel";
import Header from "@/components/header";
import ImageHero from "@/components/image-hero";
import { CommunityTile, ContentContainer, ContentTile, EventLabel, ImageTile, TileRow } from "@/components/tile";

import DemoNightIcon from "../../static/icon/Events/Demo-Night-Icon/Highlight.png";
import Fall2018BeachBonfire from "../../static/img/Fall-2018-Beach-Bonfire.jpg";
import TileDemoNight from "../../static/img/Fall-2019-Demo-Night.jpg";
import HeroTop from "../../static/img/Fall-2019-Retreat.jpg";
import LavaLabLogo from "../../static/lavalab-logo.png";
import "./home.css";

const About = dynamic(() => import("./sections/about"));
const Employment = dynamic(() => import("./sections/employment"));
const Events = dynamic(() => import("./sections/events"));
const ExecBoard = dynamic(() => import("./sections/exec-board"));
const Masthead = dynamic(() => import("./sections/masthead"));
const Projects = dynamic(() => import("./sections/projects"));
const Roles = dynamic(() => import("./sections/roles"));
const Testimonial = dynamic(() => import("./sections/testimonial"));

const HomePage = () => {
  return (
    <div className="page">
      <Header />
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
          <ContentTile className="video" height={550}>
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
          <ImageTile src={TileDemoNight}>
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
        <Testimonial />
      </ImageHero>
      <ContentContainer>
        <TileRow id="alumni">
          <Projects />
          <Employment />
        </TileRow>
        <TileRow>
          <ExecBoard />
        </TileRow>
      </ContentContainer>
    </div>
  );
};

const HeroDivider = styled.div`
  height: 1px;
  background-color: white;
  margin: 0 auto;
`;

export default HomePage;
