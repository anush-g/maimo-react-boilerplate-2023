import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (<section className={styles.hero}>
    <div className={styles.hero_content}>
      <h3>Recetas con flores comestibles</h3>
      <h1>Delicia y belleza en cada plato</h1>
      <Link
        activeClass='active'
        className='anchor_link'
        to={'CardsContainer'}
        spy={true}
        smooth={true}
        duration={500}
        offset={-90}
      >
        <img className={styles.chevron} src="assets/img/chevron.svg" alt="Ir abajo"/>
      </Link>
    </div>
  </section>
  )
}

export default Hero