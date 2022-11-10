import { ReactComponent as IconDice } from "../assets/images/icon-dice.svg"
import { ReactComponent as PatternDivider } from "../assets/images/pattern-divider-desktop.svg"
const Card = () => {
    return (
        <div className="card">
            <h5>Advice #115</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                maiores.
            </p>
            <PatternDivider className="divider-lg" />
            <div className="dice">
                <IconDice />
            </div>
        </div>
    )
}
export default Card
