import React from 'react';
// import Card from '../Card/Card'
import styles from './CardsContainer.module.css';
// import { Link } from 'react-scroll';

const CardsContainer = () => {

  // className={styles.card_grid} para una clase _
  // className={styles["card-grid"]} para una clase -
  // className={`${styles.card_grid}`} para varias clases _
  // className={`${styles["cards-grid-id"]} ${styles["card-grid-bg"]} ${styles["video-section"]}`} para varias clases -

  return (
    <section className={`${styles.cards_grid_id} ${styles.card_grid_bg} ${styles.video_section}`} style={{ overflow: "hidden" }}>
        <h3>Recetas más recientes</h3>

        <div className={`${styles.card_grid} ${styles.display_grid}`}>
            <article className={styles.card}>
                <img src="/assets/img/panqueques-borreja.png"  alt="Panqueques Borreja"/>
                <h5 className={styles.card_name}>Panqueques Borreja</h5>
            </article>
            <article className={styles.card}>
                <img src="/assets/img/cookies.jpg"  alt="Cookies"/>
                <h5 className={styles.card_name}>Cookies</h5>
            </article>
            <article className={styles.card}>
                <img src="/assets/img/cottage-con-pensamientos.png"  alt="Cottage con pensamientos"/>
                <h5 className={styles.card_name}>Cottage con pensamientos</h5>
            </article>
        </div>

    <video autoPlay="" muted="" loop="" className={styles.video_background}>
      <source src="/assets/img/video flores.mp4" type="video/mp4"/>
    </video>
  </section>



  )
}

export default CardsContainer