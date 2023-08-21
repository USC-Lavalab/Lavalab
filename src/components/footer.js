import React from "react"
import styled from "styled-components"
import FacebookIcon from "../../static/icon/Facebook-Icon/Light.png"
import InstagramIcon from "../../static/icon/Instagram-Icon/Light.png"
import TwitterIcon from "../../static/icon/Twitter-Icon/Light.png"
import LavaLabLogo from "../../static/lavalab-logo.png"
import LavaLearnLogo from "../../static/lavalearn-logo.png"
import GriefCenterLogo from "../../static/img/greif-logo.png"
import NeudesicLogo from "../../static/img/Neudesic-White-Logo.png"

let StyledFooter = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-family: "NeurialGrotesk";

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }

  .icons a {
    height: 29px !important;
    img {
      height: 15px;
      width: 15px;
      padding: 6px;
      border: 1px solid #ffffff;
      border-radius: 100px;
      margin-left: 16px;
      margin-right: 16px;
      cursor: pointer;
    }
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }

  img.disabled {
    border: 1px solid #8e8e93;
    cursor: not-allowed;
  }

  .social-icon {
    margin-left: 16px;
  }

  .copyright {
    padding-top: 20px;
    width: 100%;
  }
  img.lava {
    height: 60px;
    margin-right: auto;
    margin-left: 30px;
  }
  .top {
    display: flex;
    @media only screen and (max-width: 600px) {
      display: none;
    }
    flex-direction: row;
    justify-content: flex-start;
    .icons {
      align-self: center;
      flex: 0 1 auto;
      position: absolute; /* new */
      left: 50%;
      transform: translateX(-50%);
    }
    .lavalearn {
      color: black;
      padding: 10px;
      background-color: white;
      border-radius: 3px;
    }
    .lava-link {
      align-self: center;
      margin-bottom: 10px;
      margin-right: 30px;
    }
    .sponsors {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`

const Footer = () => (
  <StyledFooter id="footer">
    <div className="top">
      <img className="lava" src={LavaLabLogo} alt=""/>
      <div className="icons">
        <a href="https://www.facebook.com/usclavalab">
          <img className="social-icon" src={FacebookIcon} alt=""/>
        </a>
        <a href="https://www.instagram.com/usclavalab/?hl=en">
          <img className="social-icon" src={InstagramIcon}alt="" />
        </a>
        <a href="https://twitter.com/usclavalab">
          <img className="social-icon" src={TwitterIcon} alt=""/>
        </a>
      </div>

      <a
        className="lava-link"
        href="https://learn.usclavalab.org/"
        target="_blank" rel="noopener noreferrer"
      >
        <div className="lavalearn">
          <img src={LavaLearnLogo} height={30} alt=""/>
        </div>
      </a>
    </div>
    <div className="sponsors">
      <p style={{ width: "100%", fontSize: 20, paddingBottom: 12 }}>
        Our sponsors:
      </p>
      <img
        src={NeudesicLogo}
        height={30}
        style={{ paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }} alt=""
      />
      <img
        src={GriefCenterLogo}
        height={60}
        style={{ paddingLeft: 20, paddingRight: 20 }} alt=""
      />
    </div>
    <div className="copyright">
      <p>LavaLab 2021. All Rights Reserved.</p>
    </div>
  </StyledFooter>
)

export default Footer
