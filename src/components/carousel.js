// carousel component... fk
import React, { useState } from "react"
import styled from "styled-components"

import LeftIconDisabled from "../../static/icon/Left-Arrow-Icon/Disabled.png"
import RightIconDisabled from "../../static/icon/Right-Arrow-Icon/Disabled.png"
import LeftIconEnabled from "../../static/icon/Left-Arrow-Icon/Light.png"
import RightIconEnabled from "../../static/icon/Right-Arrow-Icon/Light.png"

const StyledCarousel = styled.div`
  width: 472px;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 1115px) {
    width: 100%;
  }

  .carouselControls {
    display: flex;
    align-items: center;
    position: absolute;
    width: 472px;
    left: 0;
    bottom: 0;
    height: 80px;
    background-color: #000000;

    @media only screen and (max-width: 1115px) {
      width: 100%;
    }
  }

  .carouselContent {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
  }

  img {
    height: 15px;
    width: 15px;
    padding: 6px;
    border: 1px solid #ffffff;
    border-radius: 100px;
    margin-left: 32px;
    cursor: pointer;
  }

  img.disabled {
    border: 1px solid #8e8e93;
    cursor: not-allowed;
  }

  .social-icon {
    margin-left: 16px;
  }

  .currentPage {
    margin-left: 15px;
    color: white;
  }

  .carouselSlideContainer {
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`

const StyledCarouselSlide = styled.div`
  margin-top: 60px;
  height: 80%;
  width: 100%;

  @media only screen and (max-width: 1115px) {
    margin-top: 40px;
  }

  h1 {
    font-family: "Editor";
    font-size: 36px;
    padding: 10px 0;
    line-height: 30px;

    @media only screen and (max-width: 1115px) {
      font-size: 28px;
      line-height: 1.1;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.2;
    font-size: 16px;
  }

  em {
    display: block;
    padding: 5px 0;
    margin: 0;
    font-weight: bold;
    font-size: 17px;
  }

  a {
    display: block;
    margin: 20px 0;
    color: #5d71d8;
    font-weight: bold;
  }
`

const CarouselSlide = ({ title, children }) => (
    <StyledCarouselSlide>
        <p className="title"> {title} </p>
        {children}
    </StyledCarouselSlide>
)

const Carousel = ({ children, titles }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <StyledCarousel>
            <div
                className="carouselContent"
                style={{
                    width: `${100 * children.length}%`,
                    transform: `translateX(${(-100 / children.length) * currentSlide}%)`,
                }}
            >
                {children.map((slide, idx) => (
                    <div className="carouselSlideContainer" key={idx}>
                        {slide}
                    </div>
                ))}
                {children}
            </div>
            <div className="carouselControls">
                <img alt=""
                    src={currentSlide === 0 ? LeftIconDisabled : LeftIconEnabled}
                    className={currentSlide === 0 ? "disabled" : ""}
                    onClick={() => {
                        if (currentSlide !== 0) setCurrentSlide(currentSlide - 1)
                    }}
                ></img>
                <img alt=""
                    src={
                        currentSlide === children.length - 1
                            ? RightIconDisabled
                            : RightIconEnabled
                    }
                    className={currentSlide === children.length - 1 ? "disabled" : ""}
                    onClick={() => {
                        if (currentSlide < children.length - 1)
                            setCurrentSlide(currentSlide + 1)
                    }}
                ></img>
                <div className="currentPage">
                    {currentSlide < children.length - 1 ? titles[currentSlide + 1] : ``}
                </div>
            </div>
        </StyledCarousel>
    )
}

const StyledSinglePanel = styled.div`
  .carouselControls {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 80px;
    background-color: #000000;

    @media only screen and (max-width: 1115px) {
      width: 100%;
    }

    img {
      height: 15px;
      width: 15px;
      padding: 6px;
      border: 1px solid #ffffff;
      border-radius: 100px;
      margin-left: 32px;
      cursor: pointer;
    }

    img.disabled {
      border: 1px solid #8e8e93;
      cursor: not-allowed;
    }

    .social-icon {
      margin-left: 16px;
    }

    .currentPage {
      margin-left: 15px;
      color: white;
    }
  }

  @media only screen and (max-width: 1115px) {
    width: 100%;
    height: 600px;
  }
`

const SinglePanel = ({ children }) => {
    return (
        <StyledSinglePanel>
            <div className="carouselContent">{children}</div>
        </StyledSinglePanel>
    )
}

const StyledTiledCarousel = styled.div`
  display: flex;

  @media only screen and (max-width: 1115px) {
    .icon-grid {
      display: none;
    }
  }
`

const IconGrid = styled.div`
  width: 472px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-grow: 100;
  flex-wrap: wrap;
  margin-left: 70px;
`

const IconGridTile = styled.div`
  display: inline-flex;
  vertical-align: top;
  width: 135px;
  height: 135px;
  margin: 12.5px 0;

  border: 1px solid #f2f2f7;
  background-color: #f2f2f7;

  justify-content: center;

  cursor: pointer;

  &.active {
    background-color: white;
    border: 1px solid #e5e5ea;

    p: {
      text-color: black;
    }
  }

  .tile-inner {
    width: 75px;
    height: auto;
    align-self: center;
  }

  p {
    text-align: center;
    color: #8e8e93;
    padding-top: 10px;
  }

  img {
    display: block;
    height: 48px;
    width: 48px;
    margin: 0 auto;
  }
`

const TiledCarousel = ({ children, titles }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <StyledTiledCarousel>
            <StyledCarousel>
                <div
                    className="carouselContent"
                    style={{
                        width: `${100 * children.length}%`,
                        transform: `translateX(${(-100 / children.length) *
                            currentSlide}%)`,
                    }}
                >
                    {children.map((slide, idx) => (
                        <div className="carouselSlideContainer" key={idx}>
                            {slide}
                        </div>
                    ))}
                    {children}
                </div>
                <div className="carouselControls">
                    <img alt=""
                        src={currentSlide === 0 ? LeftIconDisabled : LeftIconEnabled}
                        className={currentSlide === 0 ? "disabled" : ""}
                        onClick={() => {
                            if (currentSlide !== 0) setCurrentSlide(currentSlide - 1)
                        }}
                    ></img>
                    <img
                        alt=""
                        src={
                            currentSlide === children.length - 1
                                ? RightIconDisabled
                                : RightIconEnabled
                        }
                        className={currentSlide === children.length - 1 ? "disabled" : ""}
                        onClick={() => {
                            if (currentSlide < children.length - 1)
                                setCurrentSlide(currentSlide + 1)
                        }}
                    ></img>
                    <div className="currentPage">
                        {currentSlide < children.length - 1 ? titles[currentSlide + 1] : ``}
                    </div>
                </div>
            </StyledCarousel>
            <IconGrid className="icon-grid">
                {children.map((slide, idx) => (
                    <IconGridTile
                        className={currentSlide === idx ? "active" : ""}
                        onClick={() => setCurrentSlide(idx)}
                    >
                        <div className="tile-inner">
                            <img src={slide.props.icon} alt="" />
                            <p>{titles[idx]}</p>
                        </div>
                    </IconGridTile>
                ))}
            </IconGrid>
        </StyledTiledCarousel>
    )
}

export { Carousel, TiledCarousel, SinglePanel, CarouselSlide }
