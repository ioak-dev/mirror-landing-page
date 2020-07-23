import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import KeySection from "../components/KeySection"
import DemoSection from "../components/DemoSection"
import OnboardSection from "../components/OnboardSection"
import ContactSection from "../components/ContactSection"
import FaqSection from "../components/FaqSection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"
import FeatureSection from "../components/FeatureSection"
import SpecialitySection from "../components/SpecialitySection"
import AiSection from "../components/AiSection"

const IndexPage = () => (
  <div className="page-home">
    <SEO title="Features and getting started" />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <HeroSection />
    <SpecialitySection />
    <AiSection />
    <KeySection />
    <FeatureSection />
    <OnboardSection />
    <FaqSection />
    <ContactSection />
    <DemoSection />
    <FooterSection />
    <CopyrightSection />
  </div>
)

export default IndexPage
