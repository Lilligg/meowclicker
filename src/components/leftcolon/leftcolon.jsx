import { IMAJECAT } from "./imagecat";
import ContainerCat from "./containercatimage";
import "./leftcolon.css"

const LeftColon = () => {
    return(
        <>
        <div className="containerLeftColon">
            <h1>Добро пожаловать в Meow Cliker</h1>
            <p>Милые котики ждут, пока вы их погладите:</p>
            <div className="catcontainer1">
            {IMAJECAT.map((pp) => {
             return(<ContainerCat img ={pp.img}/>)
            })
            }
            </div>
        </div>
        </>
    )
}

export default LeftColon