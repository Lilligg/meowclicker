import "./containerimage.css"

const ContainerCat = (props) => {
const {img} = props;

    return(
        <div className="catcontainer">
         <img src = {img} className="imgcat1"></img>
        </div>
    )
}

export default ContainerCat