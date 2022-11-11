import { useState, useEffect } from "react"
import { ReactComponent as IconDice } from "../assets/images/icon-dice.svg"
import { ReactComponent as PatternDividerLg } from "../assets/images/pattern-divider-desktop.svg"
import { ReactComponent as PatternDividerMd } from "../assets/images/pattern-divider-mobile.svg"

const Card = () => {
    const [width, setWidth] = useState(window.innerWidth)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange)
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange)
        }
    }, [])

    const isMobile = width <= 768
    return (
        <div className="card">
            <h5>Advice #115</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                maiores.
            </p>
            {isMobile ? (
                <PatternDividerMd className="divider-md" />
            ) : (
                <PatternDividerLg className="divider-lg" />
            )}
            <div className="dice">
                <IconDice />
            </div>
        </div>
    )
}
export default Card
