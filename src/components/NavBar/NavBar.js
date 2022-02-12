import styles from "./navBar.module.css"

const NavBar = (props) => {
    return ( 
        <header className={styles.navbar}>
            <h3>My Shopping-Center</h3>
            <span>{props.totalItem}</span>
        </header>
     );
}
 
export default NavBar;