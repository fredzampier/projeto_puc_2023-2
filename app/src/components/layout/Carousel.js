import Carousel from 'react-bootstrap/Carousel';
import Logo from './logopanela.jpg';

import styles from './Carousel.module.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={styles.img} src ={Logo} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src ="https://www.gov.br/secretariageral/pt-br/consea/noticias/manifestacao-da-presidencia-do-consea-sobre-o-lancamento-do-plano-brasil-sem-fome/brasilsemfome.png" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src ={Logo} text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;