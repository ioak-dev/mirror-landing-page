import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/KeySection.json"

export default function KeySection() {
  return (
    <div className="key-section">
      <h2 className="key-section--heading heading--2">Key Benefits</h2>
      <div className="key-section--container column-layout">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
