import logo from "../../resources/image/logo.png"
import "./header.css"

const Header = () => {
return(
<header className="header">
    <img src = {logo} className="logo"></img>
    <h1 className="text">Meow Clicker</h1>
</header>
)
}

export default Header;