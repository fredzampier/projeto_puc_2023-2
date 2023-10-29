import styles from './Quadro.module.css'

function Quadro(props){
    return (
        <div className={styles.formato}>
            <div >
                <img className={styles.imagem} src={props.imagem}></img>
            </div>
            <div className= {styles.texto}>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default Quadro