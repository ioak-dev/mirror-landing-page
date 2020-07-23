import React from "react"
import "./CallToAction.scss"
import OakButton from "../oakfly/OakButton"

interface Props {
  data: {
    label: string
    faIcon: string
  }
}
export default function CallToAction(props: Props) {
  return (
    <div className="call-to-action">
      <OakButton
        action={() => (window.location.href = "https://mirror.ioak.org")}
        faIcon={props.data.faIcon}
        theme="primary"
        variant="regular"
      >
        {props.data.label}
      </OakButton>
    </div>
  )
}
