import styles from "./navBar.module.css"

const NavBar = ({totalItems}) => {
    return ( 
        <header className={styles.navbar}>
            <h3>My Shopping-Center</h3>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;