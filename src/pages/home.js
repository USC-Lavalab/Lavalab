import React from "react"

import styled from "styled-components"

import {
    ContentContainer,
    TileRow,
    ImageTile,
    EventLabel,
    ContentTile,
    EmploymentTile,
    Masthead,
    MastheadTextTile,
    FreeTile,
    CommunityTile,
    MastheadTile,
} from "../components/tile"
import {
    Carousel,
    CarouselSlide,
    TiledCarousel,
    SinglePanel,
} from "../components/carousel"

import HeroTop from "../../static/img/Fall-2019-Retreat.jpg"
import Fall2018BeachBonfire from "../../static/img/Fall-2018-Beach-Bonfire.jpg"
import TileDemoNight from "../../static/img/Fall-2019-Demo-Night.jpg"

import RightArrowIcon from "../../static/icon/Right-Arrow-Icon/Light.png"
import DemoNightIcon from "../../static/icon/Events/Demo-Night-Icon/Highlight.png"

import LavaLabLogo from "../../static/lavalab-logo.png"
import LavaLearnLogoWhite from "../../static/lavalearn-logo-white.png"
import LavaLabLogoHighlight from "../../static/lavalab-logo-highlight.png"

import PersonIcon from "../../static/icon/Person-Icon/Highlight.png"

import FirstStepsIcon from "../../static/icon/Events/First-Steps-Icon/Highlight.png"
import BeachBonfireIcon from "../../static/icon/Events/Beach-Bonfire-Icon/Highlight.png"
import FiresideChatsIcon from "../../static/icon/Events/Fireside-Chat-Icon/Highlight.png"
import AlumniWorkshopsIcon from "../../static/icon/Events/Alumni-Workshop-Icon/Highlight.png"
import CommunityRetreatIcon from "../../static/icon/Events/Community-Retreat-Icon/Highlight.png"
import PitchNightIcon from "../../static/icon/Events/Pitch-Night-Icon/Highlight.png"
import HackNightIcon from "../../static/icon/Events/Hack-Night-Icon/Highlight.png"
import LavaLabFormalIcon from "../../static/icon/Events/LavaLab-Formal-Icon/Highlight.png"

import AirbnbIcon from "../../static/icon/Airbnb-Icon/Light.png"
import AmazonIcon from "../../static/icon/Amazon-Icon/Light.png"
import AppleIcon from "../../static/icon/Apple-Icon/Light.png"
import FacebookIcon from "../../static/icon/Facebook-Icon/Light.png"
import GoogleIcon from "../../static/icon/Google-Icon/Light.png"
import MicrosoftIcon from "../../static/icon/Microsoft-Icon/Light.png"
import RobinhoodIcon from "../../static/icon/Robinhood-Icon/Light.png"
import SnapchatIcon from "../../static/icon/Snapchat-Icon/Light.png"
import StripeIcon from "../../static/icon/Stripe-Icon/stripe_icon.png"
import TwitterIcon from "../../static/icon/Twitter-Icon/Light.png"
import UberIcon from "../../static/icon/Uber-Icon/Light.png"
import MoreIcon from "../../static/icon/Add-Icon/Light.png"

import PresidentIcon from "../../static/icon/President-Icon/Highlight.png"
import CurriculumIcon from "../../static/icon/Curriculum-Icon/Highlight.png"
import RecruitmentIcon from "../../static/icon/Recruitment-Icon/Highlight.png"
import CommunityIcon from "../../static/icon/Community-Icon/Highlight.png"
import IndustryRelationsIcon from "../../static/icon/Industry-Relations-Icon/Highlight.png"
import FinanceIcon from "../../static/icon/Finance-Icon/Highlight.png"
import DesignIcon from "../../static/icon/Design-Icon/Highlight.png"
import DevelopmentIcon from "../../static/icon/Development-Icon/Highlight.png"
import MarketingIcon from "../../static/icon/marketing.png"
import OperationsIcon from "../../static/icon/operations.svg"

import Joanna from "../../static/img/exec/joanna.jpg"
import Mitchell from "../../static/img/exec/mitchell.jpg"
import Phoebe from "../../static/img/exec/phoebe.jpg"
import Tierra from "../../static/img/exec/tierra.jpg"
import Nikhil from "../../static/img/exec/nikhil.png"
import Maanya from "../../static/img/exec/maanya.jpg"
import Colin from "../../static/img/exec/colin.jpg"
import Haley from "../../static/img/exec/haley.jpg"
import Anay from "../../static/img/exec/anay.jpg"
import Scott from "../../static/img/exec/scott.jpg"

import "./home.css"
const HomePage = () => {
    return (
        <div className="page">
            {/* <VideoHero>
        <video
          id="video"
          className="video-player embed-responsive embed-responsive-1by1"
          height="100%"
          controls
          playsInline
          style={{ padding: "0 auto", textAlign: "center", width: "100%" }}
          autoPlay
        >
          <source
            className="embed-response-item"
            src={PromoVideo}
            type="video/mp4"
          />
        </video>
      </VideoHero> */}
            <ImageHero background={HeroTop}>
                <div className="hero-content">
                    <img src={LavaLabLogo} alt="LavaLabLogo" />
                    <HeroDivider></HeroDivider>
                    <h1 className="hero-header">Find Your Cofounders</h1>
                    <div className="bottom-row">
                        {/* <Button text='Join our community'/> */}
                        {/* <div className='clear-button'>
                            <p>Watch the film</p>
                            <img src={ PlayIcon }/>
                        </div> */}
                        {/* <div className='get-to-know-us'>
                            Get to know us
                            <img src={ DownArrowIcon }/>
                        </div> */}
                    </div>
                </div>
            </ImageHero>

            <ContentContainer>
                <TileRow height={"600 px"} id={"about"} >
                    <ContentTile title="Welcome" height={550}>
                        <Carousel titles={["Welcome", "The Experience", "Curriculum"]}>
                            <CarouselSlide>
                                <h1>Welcome</h1>
                                <p>
                                    <em>Fully immerse yourself in the startup experience.</em>
                                    We are the University of Southern California’s premiere,
                                    student-run, product incubator. Every semester, LavaLab
                                    invites a new cohort of visionary designers, developers, and
                                    product managers to build tomorrow’s startups, today.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>The Experience</h1>
                                <p>
                                    Every semester for the past 7 years, LavaLab takes a cohort of
                                    28 students composed of designers, developers, and product
                                    managers. After getting to know your fellow cohort members,
                                    you are then put into teams of 4 to create your startup. Dream
                                    big: makeup company, bar hopping app, parking
                                    hardware--anything goes.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>Curriculum</h1>
                                <p>
                                    Our trademark curriculum teaches you how to build a product,
                                    from ideation to deployment, while reinforcing principles of
                                    entrepreneurship and innovation. Learn the ins-and-outs of
                                    your role as a designer, developer, or product manager.
                                </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>
                    <ContentTile
                        image={HeroTop}
                        className="video"
                        height={550}
                    // title="Fall 2021 Intro"
                    >
                        <iframe
                            src="https://player.vimeo.com/video/668728641?h=51f392d0c5"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            style={{
                                padding: "0 auto",
                                paddingBottom: 16,
                                textAlign: "center",
                                width: "100%",
                                height: "100%",
                                maxHeight: 550,
                            }}
                            //frameborder="0"
                            allowfullscreen
                            title="Lavalab Fall 2021 Promo"
                        ></iframe>
                    </ContentTile>
                </TileRow>

                <TileRow id={"join"}>
                    <MastheadTile title="What's Happening Now" type="full" height="350">
                        <Masthead>
                            <MastheadTextTile>
                                <h1 className="hero-header tile-title">
                                    Our Fall 2023 Applications are live
                                </h1>
                                <h2 style={{ paddingTop: 16 }}>
                                    {" "}
                                    {"  "}
                                    {/* <a
                    target="_blank"
                    href="http://twitch.tv/usclavalab"
                    style={{ color: "black", textDecoration: "underline" }}
                  >
                    Twitch
                  </a> */}
                                </h2>

                                {<a
                  href= "https://forms.gle/g7C28VveNT63bQXA7"
                  target="_blank"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      backgroundColor: "black",
                      borderRadius: "3px",
                      padding: "12px 15px",
                      left: "20px",
                      right: "20px",
                      bottom: "20px",
                      width: "max-content",
                      fontColor: "white",
                    }}
                  >
                    <p style={{ fontColor: "white !important" }}>Apply Today!</p>{/*apply now*/ }
                    <img src={RightArrowIcon} height={20} />
                  </div>
                </a>}
                            </MastheadTextTile>
                            <div className="right">
                                <div className="tile apply">
                                    <p className="tile-title">Demo Night</p>
                                    <p className="detail">
                                        Come celebrate the beginning of USC's newest startups!
                                    </p>
                                    <p className="detail" style={{marginTop:"10px"}}>
                                        April 25th 5pm-8pm, Tommy's Place
                                    </p>
                                    {<a
                                        href="https://www.google.com/calendar/render?action=TEMPLATE&text=LavaLab+Demo+Night&details=Demo+Night+is+our+signature+event%2C+where+our+7+startup+teams+demo+their+products+and+pitch+them+to+our+panel+of+judges.&location=Tommy%27s+Place%0A3601+Trousdale+Pkwy%2C+Los+Angeles%2C+CA+90089&dates=20230426T000000Z%2F20230426T030000Z"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <div className="be-notified">
                                            <p>Save the Date</p>
                                            <img src={RightArrowIcon} alt="" />
                                        </div>
                                    </a>}
                                </div>
                                <div className="tile learn">
                                    <p className="tile-title">LavaLearn</p>
                                    <p className="detail">
                                        LavaLearn is our signature open-access curriculum, providing
                                        entrepreneurial and tech resources, workshops, and fireside
                                        chats to USC and the greater public.
                                    </p>
                                    <a href="https://learn.usclavalab.org/" target="_blank" rel="noopener noreferrer">
                                        <div className="be-notified">
                                            <p>Check it out</p>
                                            <img src={RightArrowIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Masthead>
                    </MastheadTile>
                </TileRow>

                <TileRow>
                    <ImageTile image={TileDemoNight} height={"100%"}>
                        <EventLabel
                            icon={DemoNightIcon}
                            name="Demo Night"
                            location="Los Angeles, CA"
                            date="Fall 2019"
                        />
                    </ImageTile>
                    <ContentTile title="Find Your Role" height={"100%"}>
                        <Carousel titles={["Developer", "Designer", "Product Manager"]}>
                            <CarouselSlide>
                                <h1>Developer</h1>
                                <p>
                                    <em>Who you are:</em>
                                    You have a knack for building and are able to hack through
                                    anything (literally and metaphorically). You are fearless in
                                    creating and are ready to teach yourself unknown tech
                                    concepts. Your grit and perseverance keep you going through
                                    coding challenges.
                                    <em>What you'll be doing:</em>
                                    Working with a fellow developer on your team to build your
                                    product: an app, website, or physical product. Creating an MVP
                                    with baseline features to get your product's ideas across.
                                    Coming together with your PM and designer to brainstorm the
                                    problem you want to solve and how to address it.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>Designer</h1>
                                <p>
                                    <em>Who you are:</em>
                                    You have a passion about crafting visual experiences. You are
                                    empathetic and able to put yourself in the user's shoes. Your
                                    ability to learn continues to push your design skills. Your
                                    creativity and attention to detail take your abilities to the
                                    next level.
                                    <em>What you'll be doing:</em>
                                    Designing the MVP for your team's product including the
                                    branding, user experience, and marketing materials.
                                    Conceptualize the best way to get your product's message
                                    across through creative expression. Coming together with your
                                    PM and developers to brainstorm the problem you want to solve
                                    and how to address it.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>Product Manager</h1>
                                <p>
                                    <em>Who you are:</em>
                                    You are ready to disrupt the norm and solve any problem that
                                    comes your way. You naturally take leadership positions in
                                    your own ventures, jobs, or class projects and are able to get
                                    a team working together to execute. You have a vision and love
                                    approaching obstacles in a creative way.
                                    <em>What you'll be doing:</em>
                                    Creating direction for your team through organization and
                                    collaboration. Working with your designer and developers to
                                    drive the product forward. Ideating on key innovations and
                                    scoping out the market for your product.
                                </p>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>
                </TileRow>
                <TileRow id={"events"}>
                    <ContentTile type="full" title="Events">
                        <TiledCarousel
                            titles={[
                                "First Steps",
                                "Beach Bonfire",
                                "Fireside Chats",
                                "Alumni Workshops",
                                "Community Retreat",
                                "Pitch Night",
                                "Hack Night",
                                "Demo Night",
                                "LavaLab Formal",
                            ]}
                        >
                            <CarouselSlide icon={FirstStepsIcon}>
                                <h1>Idea Grind</h1>
                                <p>
                                    Jump right in and see what LavaLab is about with our spin on
                                    an Info Session. Through discussion and brainstorming, hearing
                                    from E-board, and asking questions, you'll get a taste of what
                                    LavaLab is about.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={BeachBonfireIcon}>
                                <h1>Beach bonfire</h1>
                                <p>
                                    The first social event of the new cohort. Bond with your
                                    fellow cohort members and LavaLab alumni over roasted
                                    marshmallows.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={FiresideChatsIcon}>
                                <h1>Fireside Chats</h1>
                                <p>
                                    Each semester, LavaLab invites the industry’s top pioneers and
                                    entrepreneurs to share their experiences and engage with our
                                    members. In the past, we’ve had industry leaders like Elon
                                    Musk, Evan Spiegel, and Arielle Zuckerberg.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={AlumniWorkshopsIcon}>
                                <h1>Alumni Workshops</h1>
                                <p>
                                    LavaLum know best. Learn insights and skills from alumni-led
                                    workshops on anything from React Native, to Figma shortcuts,
                                    to giving the best pitch.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={CommunityRetreatIcon}>
                                <h1>Community Retreat</h1>
                                <p>
                                    Who doesn’t love a weekend getaway? Join fellow cohort members
                                    and LavaLab alumni for a trip away from Downtown Los Angeles.
                                    Get to know your future co-founders on a whole ‘nother level.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={PitchNightIcon}>
                                <h1>Pitch Night</h1>
                                <p>
                                    Two weeks before the final showcase, run through your pitch
                                    with no judgement. Get feedback from LavaLum on how to perfect
                                    your product and pitch for Demo Night.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={HackNightIcon}>
                                <h1>Hack Night</h1>
                                <p>
                                    It’s the final stretch. Join your fellow devs and designers to
                                    grind out the finishing touches of your product. Fuel up with
                                    free food and encouragement from our E-board.
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={DemoNightIcon}>
                                <h1>Demo Night</h1>
                                <p>
                                    The Oscars of LavaLab. Demo and pitch your product to investor
                                    judges to showcase your team's hard work. Congratulations,
                                    you’re now a LavaLum!
                                </p>
                            </CarouselSlide>
                            <CarouselSlide icon={LavaLabFormalIcon}>
                                <h1>LavaLab Formal</h1>
                                <p>
                                    A celebration of hard work, new friends, and the graduation of
                                    another accomplished cohort. Cheers!
                                </p>
                            </CarouselSlide>
                        </TiledCarousel>
                    </ContentTile>
                </TileRow>
            </ContentContainer>
            <ImageHero background={Fall2018BeachBonfire} height="800">
                <div className="event-container">
                    <EventLabel
                        icon={DemoNightIcon}
                        name="Retreat"
                        location="Los Angeles, CA"
                        date="Fall 2019"
                    />
                </div>
            </ImageHero>
            <ContentContainer>
                <TileRow>
                    <CommunityTile type="full" title="Community">
                        <SinglePanel>
                            <CarouselSlide>
                                <h1>
                                    A network of passionate innovators, over 350 members strong
                                    and growing.
                                </h1>
                                <p>
                                    The LavaLab network is like no other. We are a community of
                                    entrepreneurs, go-getters, and change makers who value
                                    connection, deep engagement, and building for a brighter
                                    future. Grow together in an environment that meets you where
                                    you’re at and pushes you to become the best version of
                                    yourself. At LavaLab, you’ll meet your future co-founders and
                                    some of your closest friends.
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
                    Lavalab made my semester one of the most rewarding experiences as a
                    student so far. Turning a vision into a reality, finding lifelong
                    friends and potential cofounders, and learning to hustle make this
                    something I'd recommend to everyone.
                    <div className="quote-profile">
                        <img src={PersonIcon} alt="" />

                        <div className="quote-profile-details">
                            <p className="name">Shub Gaur</p>
                            <p className="detail">Product Manager · Spring 2020</p>
                        </div>
                    </div>
                </div>
            </ImageHero>

            <ContentContainer>
                <TileRow id="alumni">
                    <ContentTile title="Alumni Project Spotlight">
                        <Carousel titles={["CarbonLink", "Fleek","Kyoku"]}>
                            <CarouselSlide>
                                <h1>CarbonLink</h1>
                                <p>
                                Access carbon markets.
                                CarbonLink is the simple and secure platform to buy, sell, and manage carbon offsets on the blockchain.
                                </p>
                                <a href="https://www.carbonlink.io/">https://www.carbonlink.io/</a>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>Fleek</h1>
                                <p>
                                Your style, on Fleek. Explore curated items, search across top women's clothing brands, save favorites, organize Fleek boards, and purchase items.
                                </p>
                                <a href="https://www.fleekfashion.app/">
                                    https://www.fleekfashion.app/
                                </a>
                            </CarouselSlide>
                            <CarouselSlide>
                                <h1>Kyoku</h1>
                                <p>
                                    Post-ride recovery shakes made for your body type, riding
                                    style, and cycling goals from plant-based superfoods.
                                    Personalized for optimal performance.
                                </p>
                                <a href="https://kyoku.com/">https://kyoku.com/</a>
                            </CarouselSlide>
                        </Carousel>
                    </ContentTile>

                    <EmploymentTile title="Alumni Industry Employment" theme="dark">
                        <EmploymentContent>
                            <div className="employment-item">
                                <img src={AirbnbIcon} alt="" />
                                Airbnb
                            </div>
                            <div className="employment-item">
                                <img src={AmazonIcon} alt="" />
                                Amazon
                            </div>
                            <div className="employment-item">
                                <img src={AppleIcon} alt="" />
                                Apple
                            </div>
                            <div className="employment-item">
                                <img src={FacebookIcon} alt="" />
                                Facebook
                            </div>
                            <div className="employment-item">
                                <img src={GoogleIcon} alt="" />
                                Google
                            </div>
                            <div className="employment-item">
                                <img src={MicrosoftIcon} alt="" />
                                Microsoft
                            </div>
                            <div className="employment-item">
                                <img src={RobinhoodIcon} alt="" />
                                Robinhood
                            </div>
                            <div className="employment-item">
                                <img src={SnapchatIcon} alt="" />
                                Snapchat
                            </div>
                            <div className="employment-item">
                                <img src={StripeIcon} alt="" />
                                Stripe
                            </div>
                            <div className="employment-item">
                                <img src={TwitterIcon} alt="" />
                                Twitter
                            </div>
                            <div className="employment-item">
                                <img src={UberIcon} alt="" />
                                Uber
                            </div>
                            <div className="employment-item">
                                <img className="more-icon" src={MoreIcon} alt="" />
                                And more
                            </div>
                        </EmploymentContent>
                    </EmploymentTile>
                </TileRow>
                <TileRow>
                    <FreeTile title="Executive Team" type="full">
                        <hr />
                        <p className="title">Executive Team</p>
                        <ExecutiveBoard>
                            <div className="member">
                                <img src={Nikhil} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={PresidentIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/patel-nikhil/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Nikhil Patel</p>
                                        </a>
                                        <p className="eboard-title">President</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Mitchell} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={OperationsIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/mitchell-morrison2024/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Mitchell Morrison</p>
                                        </a>
                                        <p className="eboard-title">Director of Operations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Maanya} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={RecruitmentIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/maanya-kashyap/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Maanya Kashyap</p>
                                        </a>
                                        <p className="eboard-title">Director of Recruitment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Joanna} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={CommunityIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/joannapark02/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Joanna Park</p>
                                        </a>
                                        <p className="eboard-title">Director of Community</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Scott} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={IndustryRelationsIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/susantoscott/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Scott Susanto</p>
                                        </a>
                                        <p className="eboard-title">
                                            Director of Industry Relations
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Tierra} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={FinanceIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/tierrabuissereth/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Tierra Buissereth</p>
                                        </a>
                                        <p className="eboard-title">Director of Sponsorship</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Phoebe} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={DesignIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/phoebeum/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Phoebe Um</p>
                                        </a>
                                        <p className="eboard-title">Director of Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Colin} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={DevelopmentIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/colin-ho99/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Colin Ho</p>
                                        </a>
                                        <p className="eboard-title">Director of Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Haley} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={MarketingIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/hellohaleyho/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Haley Ho</p>
                                        </a>
                                        <p className="eboard-title">Director of Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <img src={Anay} className="profile-pic" alt="" />
                                <div className="description">
                                    <img className="eboard-icon" src={CurriculumIcon} alt="" />
                                    <div className="description-inner">
                                        <a href="https://www.linkedin.com/in/anaykarwal/" target="_blank" rel="noopener noreferrer" className="linkedInLinks">
                                            <p className="name">Anay Karwal</p>
                                        </a>
                                        <p className="eboard-title">Director of Alumni and External Community</p>
                                    </div>
                                </div>
                            </div>
                        </ExecutiveBoard>
                    </FreeTile>
                </TileRow>
            </ContentContainer>
            <StyleHeader className="navbar">
                <a href="/"><img src={LavaLabLogoHighlight} alt="" /></a>
                <div className="links">
                    <a href="#about">About</a>
                    <a href="#join">Join</a>
                    <a href="#events">Events</a>
                    <a href="#alumni">Alumni</a>
                    <a href="#footer">Contact</a>
                    <a
                        href="https://learn.usclavalab.org/"
                        target="_blank" rel="noopener noreferrer"
                        style={{ backgroundColor: "black", padding: 10, borderRadius: 5 }}
                    >
                        <img src={LavaLearnLogoWhite} alt="" />
                    </a>
                </div>
            </StyleHeader>
        </div>
    )
}

const ExecutiveBoard = styled.div`
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
      margin: 0 auto;
      margin-top: 20px;
      display: block;
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

        .linkedInLinks{
            color:black;
            text-decoration:none;
            &:hover {
                color:#FF5C39;
            }
        }

        .name{
            font-weight:600;
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
`

const EmploymentContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  width: 100%;

  .employment-item {
    flex: 1 0 21%;
    text-align: center;
    color: #8e8e93;
    margin-bottom: 70px;

    @media only screen and (max-width: 1115px) {
      margin-bottom: 30px;
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
`

const ImageHero = styled.div`
  position: relative;
  background-image: url(${props => props.background});
  height: ${({ height }) => (height ? height : "810")}px;
  width: 100%;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 1115px) {
    height: 500px;
    background-position: center;
  }

  &.quote {
    color: white;
    background-color: black;
    font-family: "Editor";
    font-size: 52px;
    line-height: 62px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1115px) {
      font-size: 25px;
      line-height: 32px;
    }

    .quote-content {
      margin: 0 auto;
      width: 85%;
      max-width: 1044px;
      span {
        color: #ff5c39;
      }

      .quote-profile {
        margin-top: 40px;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 17.5px;

        img {
          height: 18px;
          width: 18px;
          padding: 8px;
          border: 1px solid #ff5c39;
          border-radius: 100px;
          margin-right: 15px;
        }

        .quote-profile-details {
          .name {
            font-family: "NeurialGrotesk-Medium";
          }

          .detail {
            font-family: "NeurialGrotesk";
            color: #8e8e93;
          }
        }
      }
    }
  }

  .event-container {
    position: relative;
    max-width: 1044px;
    margin: 0 auto;
    height: 100%;
  }

  .hero-content {
    position: relative;
    margin: 0 auto;
    max-width: 1044px;
    width: 90%;
    top: 460px;
    vertical-align: top;

    img {
      display: inline-block;
      width: 250px;
    }

    @media only screen and (max-width: 1115px) {
      top: 150px;
    }
  }

  .hero-header {
    font-size: 81px;
    font-family: "Editor";
    color: white;
    width: 50%;
    line-height: 1.1;
    margin: 15px 0;
    display: inline-block;

    @media only screen and (max-width: 1115px) {
      font-size: 55px;
    }
  }

  .bottom-row {
    display: flex;
    align-items: middle;
  }

  .clear-button {
    margin-left: 10px;
    display: inline-flex;
    color: white;
    padding: 10px 15px;
    justify-content: center;
  }

  .clear-button img {
    height: 18px;
    width: 18px;
    display: block;
    padding-left: 10px;
  }

  .get-to-know-us {
    display: inline-flex;
    padding: 0 15px;
    color: white;
    align-items: center;
    position: relative;
    margin-left: auto;
    font-family: NeurialGrotesk-Medium;
  }

  .get-to-know-us img {
    display: block;
    height: 14px;
    width: 14px;
    margin-left: 10px;
    padding: 8px;
    border: 1px white solid;
    border-radius: 20px;
  }
`
/*
const VideoHero = styled.div`
  position: relative;
  height: ${({ height }) => (height ? height : "810")}px;
  width: 100%;
  background-size: cover;
  background-color: black;
  background-position: center;

  @media only screen and (max-width: 1115px) {
    height: 500px;
    background-position: center;
  }
`*/

const HeroDivider = styled.div`
  height: 1px;
  background-color: white;
  margin: 0 auto;
`
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
`
/*
const StyledButton = styled.div`
  display: inline-flex;
  background-color: #ff5c39;
  border-radius: 2px;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  justify-content: center;
  font-family: "NeurialGrotesk-Medium";

  img {
    display: block;
    height: 18px;
    width: 18px;
    padding-left: 10px;
  }
`
*/
/*
const Button = props => {
  return (
    <StyledButton>
      <p>{props.text}</p>
      <img src={RightArrowIcon} />
    </StyledButton>
  )
}
*/
export default HomePage
