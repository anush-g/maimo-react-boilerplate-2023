import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className={styles.header_container}>

    <nav>
      <div class="navbar navbar-container">
        <ul>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'header'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <img src="/assets/img/CALÍOPE.png" alt="Logo de GoClean" height="30px"/>
            </Link>
          </li>
          <li>
            <Link
              activeClass='active' 
              className='anchor_link'
              to={'hero'} //en app.js en el element
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'cardsContainer'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Recetas
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'nl'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Suscribirse
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'cta'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Recetarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};


export default Header;
