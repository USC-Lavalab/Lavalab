"use client";

import Footer from "../components/footer.js";
import SEO from "../components/seo";
import HomePage from "./home";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 1300,
    speedAsDuration: true,
  });
}

const IndexPage = () => (
  <>
    <SEO />
    <HomePage></HomePage>
    <Footer></Footer>
  </>
);

export default IndexPage;
