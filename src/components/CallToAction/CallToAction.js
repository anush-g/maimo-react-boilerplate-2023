import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (<section className={styles.cta}>
    <div className={styles.cta_content}>
                <h3>Llevate un recetario con <br /><em>más de 100 recetas originales</em></h3>
                <p>Nuestro recetario impreso contiene una selección de nuestras <strong>mejores recetas</strong>, además de consejos y trucos útiles para cocinar comidas saludables y deliciosas con flores.
                <br /><br />Además, de bonus tenés toda la <strong>información nutricional</strong> de cada flor, en qué cantidad conviene usarlas, qué sabor aportan y para qué tipo de comidas. A un <strong>precio súper accesible</strong>, este recetario es imperdible</p>
                <button className={`${styles.btn} ${styles.cta_btn}`}>Comprar recetario</button>
    </div>
              <img className={styles.cta_content} src="assets/img/recetario clarito.jpg" alt="Recetario" />


  </section>
  )};


export default CallToAction;