import { useState, useEffect } from "react"
import { ReactComponent as IconDice } from "../assets/images/icon-dice.svg"
import { ReactComponent as PatternDividerLg } from "../assets/images/pattern-divider-desktop.svg"
import { ReactComponent as PatternDividerMd } from "../assets/images/pattern-divider-mobile.svg"
import axios from "axios"

const Card = ({ isMobile }) => {
    const [advice, setAdvice] = useState([])

    const baseUrl = "https://api.adviceslip.com/advice"

    const getAdvice = () => {
        axios
            .get(baseUrl)
            .then((res) => {
                setAdvice(res.data.slip)
                console.log(res.data.slip)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <div className="card">
            <h5>Advice #{advice.id}</h5>
            <p>{advice.advice}</p>
            {isMobile ? (
                <PatternDividerMd className="divider-md" />
            ) : (
                <PatternDividerLg className="divider-lg" />
            )}
            <div
                className="dice"
                onClick={getAdvice}
            >
                <IconDice />
            </div>
        </div>
    )
}
export default Card
