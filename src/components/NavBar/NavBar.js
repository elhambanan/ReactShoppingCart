import styles from "./navBar.module.css"

const NavBar = ({totalItems}) => {
    console.log("Navbar.js render")
    return ( 
        <header className={styles.navbar}>
            <h3>My Shopping-Center</h3>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;