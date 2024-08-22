import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

const Container = styled.div<{ small?: boolean }>`
  position: relative;
  height: ${({ small }) => (small ? 600 : 800)}px;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 1115px) {
    height: 500px;
  }

  &.quote {
    color: white;
    background-color: black;
    font-family: "Editor";
    font-size: 46px;
    line-height: 1.2;
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
`;

// Using the ImageHero component
const ImageHero = ({
  src,
  small,
  className,
  children,
}: {
  src?: StaticImageData;
  small?: boolean;
  className?: string;
  children: React.ReactNode;
}) => (
  <Container small={small} className={className}>
    {src && <Image src={src} alt={""} fill={true} style={{ objectFit: "cover" }} priority />}
    {children}
  </Container>
);

export default ImageHero;
