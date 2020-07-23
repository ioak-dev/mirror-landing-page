import React from "react"
import "./style.scss"
import mirrorWhite from "../../assets/mirror_white.svg"
import mirrorBlack from "../../assets/mirror_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? mirrorBlack : mirrorWhite}
          alt="Mirror logo"
        />
      </Link>
    </div>
  )
}
