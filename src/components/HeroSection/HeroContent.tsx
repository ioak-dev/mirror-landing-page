import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function HeroContent() {
  return (
    <OakAnimateElement>
      <div className="hero-content">
        <h1 className="heading--1 hero-content--title">{content.title}</h1>
        <div className="heading--3 hero-content--subtitle">
          {content.subtitle}
        </div>
        <div className="hero-content--cta">
          <CallToAction data={content.callToAction} />
        </div>
      </div>
    </OakAnimateElement>
  )
}
