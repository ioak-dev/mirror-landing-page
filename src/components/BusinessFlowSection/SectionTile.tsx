import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    faIcon: any
  }
  step: number
  isLast: boolean
}

export default function SectionTile(props: Props) {
  return (
    <OakAnimateElement>
      <div className="business-flow-sectiontile">
        <div className="business-flow-sectiontile--image">
          <div>{props.step}</div>
          {/* <img src={require(`../../assets/${props.data.faIcon}`)} /> */}
          <i className={props.data.faIcon} />
        </div>
        {/* <i className={props.data.faIcon} /> */}
        <div
          className={`business-flow-sectiontile--content ${
            props.isLast ? "last" : "not-last"
          }`}
        >
          <h4 className="heading--4 business-flow-sectiontile--content--heading">
            {props.data.title}
          </h4>
          <p>{props.data.description}</p>
        </div>
      </div>
    </OakAnimateElement>
  )
}
