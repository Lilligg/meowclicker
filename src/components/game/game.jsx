import Clicker from "../clicker/clicker"
import Cont from "../upgrade/upgrade"
import "./game.css"
import LeftColon from "../leftcolon/leftcolon"

const Game = () => {
    return(
        <div className="conteinerGame">
            <div className="form">
                <LeftColon/>
            </div>
            <div className="clicker">
                <Clicker/>
            </div>
            <div className="update">
                <Cont/>
            </div>
        </div>
    )
}

export default Game