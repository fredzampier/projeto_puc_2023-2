import Button from './Button'
import styles from './Navbar.module.css'
import logo from './logo.jpg'
function Navbar(){
    return (
        <nav className={styles.navbar}>
                <img className={styles.img} src={logo}></img>
                <Button text='Login'></Button>
        </nav>
    )
}

export default Navbar