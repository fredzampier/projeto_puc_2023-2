
import styles from './Home.component.module.css'
import Quadro from "../layout/Quadro"
import UncontrolledExample from '../layout/Carousel'
import Button from '../layout/Button'



function Home(){
    return (
        <div className={styles.formato}>
            <div className={styles.texto}><h1>A sobra sua, pode ser a esperança de outros!</h1></div>
            <div className={styles.texto}><h3>Conectando pessoas com disposição para ajudar o próximo, com Instituições que fazem a diferença perto de você </h3></div>
            <div className={styles.quadro}>
                <Quadro imagem ="https://img.freepik.com/fotos-gratis/grande-conjunto-de-vegetais-isolados-em-um-fundo-branco_485709-44.jpg" texto ="Por ano, o desperdício no país chega a 27 milhões de toneladas de alimentos, sendo que 60% deles vêm do consumo no dia a dia das famílias."></Quadro>
                <Quadro imagem ="https://cdn-icons-png.flaticon.com/512/4939/4939326.png" texto = "Segundo o relatório, em 2022, 70,3 milhões de pessoas estavam em estado de insegurança alimentar moderada, que é quando possuem dificuldade para se alimentar no Brasil."></Quadro>
                <Quadro imagem ="https://impactosocial.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png" texto="As ONGs (Organizações Não-Governamentais) representam uma grande força econômica e de transformação social no Brasil, apenar do pouco reconhecimento."></Quadro>
            </div>
            <div className={styles.margem}>
                <div className={styles.texto}>
                    <h1>Cadastre-se e venha fazer a diferença!</h1>
                </div>
                <div className={styles.disposicao}>
                    <Button customClass='larger' text='Seja um doador'></Button>
                    <Button customClass='larger' text='Seja uma instituição parceira'></Button>
                </div>
            </div>
            <div className={styles.carroseul_margem}>
                <div className={styles.texto}><h3>Algumas Instituições parceiras da plataforma</h3></div>
                <div className={styles.display_imagens}>
                    <img src="https://www.gov.br/secretariageral/pt-br/consea/noticias/manifestacao-da-presidencia-do-consea-sobre-o-lancamento-do-plano-brasil-sem-fome/brasilsemfome.png" className={styles.imagem}></img>
                    <img src="https://gife.org.br/wp/media/2021/05/logo-panela-cheia-salva.jpg" className={styles.imagem}></img>
                    <img src="https://www.sodexobeneficios.com.br/data/files/D4/85/12/A6/7E3A381088E91938930BF9C2/xinstituto-stop-hunger-brasil.png.pagespeed.ic.UXHj3t-J-b.png" className={styles.imagem}></img>
                </div>
            </div>
            
            
            

        </div>
    )
}

export default Home