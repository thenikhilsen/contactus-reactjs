import React from 'react'
import Logo from '../../images/logo.png';
import styles from './Navigation.module.css'

const Navigation = () => {
  
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        Nik.
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
