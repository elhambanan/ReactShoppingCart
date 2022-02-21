import { useContext } from "react";
import { UserContext, WebsiteContext } from "../../App";
import styles from "./navBar.module.css";


const NavBar = ({totalItems}) => {
    // console.log("Navbar.js render")
    const website = useContext(WebsiteContext);
    const user = useContext(UserContext);

    console.log(website,user)
    return ( 
        <header className={styles.navbar}>
            <h3>My Shopping-Center</h3>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;