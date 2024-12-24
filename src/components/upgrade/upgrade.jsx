import {OBJ} from "./UpgName"
import Upgrade from "./countUp"

const Cont = () => {
return (
    <>
    {OBJ.map((aa) => {
        return(<Upgrade key = {aa.id} img = {aa.img} names = {aa.name} count = {aa.count} />)
    })
   } 
   {console.log(OBJ)}
    </>
)   
}

export default Cont