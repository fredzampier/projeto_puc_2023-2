
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            
            <ul className={styles.itens}>
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Projeto PUC-Minas 2023/2</li>
            </ul>   
            
        </footer>
    )
}

export default Footer