import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/SpecialitySection.json"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function SpecialitySection() {
  return (
    <div className="speciality-section">
      <OakAnimateElement>
        <h2 className="speciality-section--heading heading--2">
          {content.title}
        </h2>
      </OakAnimateElement>
      <OakAnimateElement>
        <div className="speciality-section--content">
          <p className="heading--4">{content.description}</p>
          {/* <CallToAction data={content.callToAction} /> */}
        </div>
      </OakAnimateElement>
    </div>
  )
}
