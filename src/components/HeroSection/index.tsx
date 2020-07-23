import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"
import HeroContent from "./HeroContent"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section--container">
        <HeaderSection />
        <HeroContent />
      </div>
    </div>
  )
}
