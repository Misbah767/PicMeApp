import React from "react"
import RightSection from "../../Components/RightSection/RightSection"
import LeftSection from "../../Components/LeftSection/LeftSection"
import illustration from "../../assets/images/camerahalfmooncolrful.png"

import "./Home.css"
export default function Home() {
    return (
        <div className="home">
            <LeftSection />
            <RightSection image={illustration} altText="Signup Illustration" />
        </div>
    )
}
