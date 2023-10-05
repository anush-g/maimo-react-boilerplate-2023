import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (<section className={styles.nl}>

        <div className={styles.nl_content}>
                <h3>¡Nuevas recetas <em>semana a semana</em>!</h3>
                <p>Para recibir las mejores recetas, consejos y <strong>descuentos</strong> hacé click en el botón y suscribite a nuestro Newsletter.</p>
                <form action="#" method="post">
                  <input type="email" name="email" placeholder="Ingresá tu correo electrónico" required="" />
                  <br />
                  <button className={styles.btn} type="submit">Sucribirme ahora</button>
                </form>
        </div>
              <img className={styles.nl_content} src="assets/img/gif nl.gif" alt="Recetas" />


    </section>
    )

};


export default Newsletter;



